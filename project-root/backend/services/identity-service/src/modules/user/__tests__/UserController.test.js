import { UserController } from '../controllers/UserController';
import { UserStatus, Role } from 'generated/prisma';
describe('UserController', () => {
    let userController;
    let mockUserService;
    let mockRequest;
    let mockResponse;
    beforeEach(() => {
        mockUserService = {
            createUser: jest.fn(),
            getAllUsers: jest.fn(),
            getUserById: jest.fn(),
            getUserByEmail: jest.fn(),
            getUserWithPasswordByEmail: jest.fn(),
            updateProfile: jest.fn(),
            changeUserStatus: jest.fn(),
            handleLoginFailure: jest.fn(),
            handleLoginSuccess: jest.fn(),
            softDeleteUser: jest.fn(),
            updatePassword: jest.fn(),
            restoreUser: jest.fn(),
            submitIdentityVerification: jest.fn(),
            approveIdentityVerification: jest.fn(),
            rejectIdentityVerification: jest.fn(),
        };
        userController = new UserController(mockUserService);
        mockRequest = {};
        mockResponse = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
    });
    afterEach(() => {
        jest.clearAllMocks();
    });
    describe('createUser', () => {
        it('should create user successfully', async () => {
            mockRequest.body = { email: 'test@example.com', fullName: 'Test Name', role: Role.USER };
            const expectedResponse = { id: '1', email: 'test@example.com', role: Role.USER, status: UserStatus.PENDING };
            mockUserService.createUser.mockResolvedValue(expectedResponse);
            await userController.createUser(mockRequest, mockResponse);
            expect(mockUserService.createUser).toHaveBeenCalledWith(mockRequest.body);
            expect(mockResponse.status).toHaveBeenCalledWith(201);
            expect(mockResponse.json).toHaveBeenCalledWith(expect.objectContaining({
                success: true,
                data: expectedResponse
            }));
        });
    });
    describe('getUserById', () => {
        it('should get user by id', async () => {
            mockRequest.params = { id: '1' };
            const expectedResponse = { id: '1', email: 'test@example.com' };
            mockUserService.getUserById.mockResolvedValue(expectedResponse);
            await userController.getUserById(mockRequest, mockResponse);
            expect(mockUserService.getUserById).toHaveBeenCalledWith('1');
            expect(mockResponse.status).toHaveBeenCalledWith(200);
            expect(mockResponse.json).toHaveBeenCalledWith(expect.objectContaining({
                success: true,
                data: expectedResponse
            }));
        });
        it('should return 404 if user not found', async () => {
            mockRequest.params = { id: '2' };
            mockUserService.getUserById.mockResolvedValue(null);
            await userController.getUserById(mockRequest, mockResponse);
            expect(mockResponse.status).toHaveBeenCalledWith(404);
            expect(mockResponse.json).toHaveBeenCalledWith(expect.objectContaining({
                success: false,
                message: "Người dùng không tồn tại!"
            }));
        });
    });
});
