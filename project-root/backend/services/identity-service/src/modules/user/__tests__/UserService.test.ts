import { UserService } from '../services/UserService';
import { IUserRepository } from '../interfaces/IUserRepository';
import { IOtpService } from '@/modules/auth/interfaces/IOtpService';
import { UserStatus, Role } from 'generated/prisma';
import { ConflictError, NotFoundError } from '@/utils/errors/errorCustomize';

describe('UserService', () => {
  let userService: UserService;
  let mockUserRepository: jest.Mocked<IUserRepository>;
  let mockOtpService: jest.Mocked<IOtpService>;

  beforeEach(() => {
    mockUserRepository = {
      create: jest.fn(),
      findAll: jest.fn(),
      findById: jest.fn(),
      findByEmailOrPhone: jest.fn(),
      findByEmail: jest.fn(),
      findByPhone: jest.fn(),
      getUserWithPasswordByEmail: jest.fn(),
      update: jest.fn(),
      updateStatus: jest.fn(),
      incrementLoginAttempts: jest.fn(),
      resetLoginAttempts: jest.fn(),
      delete: jest.fn(),
      updatePassword: jest.fn(),
      restore: jest.fn(),
    };

    mockOtpService = {
      generateAndSendOtp: jest.fn(),
      verifyOtp: jest.fn(),
    } as unknown as jest.Mocked<IOtpService>;

    userService = new UserService(mockUserRepository, mockOtpService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('createUser', () => {
    it('should throw ConflictError if email already exists', async () => {
      mockUserRepository.findByEmailOrPhone.mockResolvedValue({ id: '1', email: 'test@test.com' } as any);
      
      await expect(
        userService.createUser({ email: 'test@test.com', fullName: 'Test', role: Role.USER })
      ).rejects.toThrow(ConflictError);
    });

    it('should create user and send OTP', async () => {
      mockUserRepository.findByEmailOrPhone.mockResolvedValue(null);
      const createdUser = {
        id: '1',
        email: 'test@test.com',
        role: Role.USER,
        status: UserStatus.PENDING,
        createdAt: new Date(),
        updatedAt: new Date(),
        profile: { fullName: 'Test' }
      };
      
      mockUserRepository.create.mockResolvedValue(createdUser as any);
      mockOtpService.generateAndSendOtp.mockResolvedValue();

      const result = await userService.createUser({
        email: 'test@test.com',
        fullName: 'Test',
        role: Role.USER
      });

      expect(mockUserRepository.create).toHaveBeenCalled();
      expect(mockOtpService.generateAndSendOtp).toHaveBeenCalledWith('test@test.com');
      expect(result.email).toBe('test@test.com');
    });
  });

  describe('getUserById', () => {
    it('should return null if user not found', async () => {
      mockUserRepository.findById.mockResolvedValue(null);
      const result = await userService.getUserById('1');
      expect(result).toBeNull();
    });

    it('should return mapped user if found', async () => {
      mockUserRepository.findById.mockResolvedValue({
        id: '1',
        email: 'test@test.com',
        profile: { fullName: 'Test' }
      } as any);

      const result = await userService.getUserById('1');
      expect(result?.email).toBe('test@test.com');
    });
  });

  describe('updateProfile', () => {
    it('should throw NotFoundError if user does not exist', async () => {
      mockUserRepository.findById.mockResolvedValue(null);
      
      await expect(
        userService.updateProfile('1', { fullName: 'New Name' })
      ).rejects.toThrow(NotFoundError);
    });
  });
});
