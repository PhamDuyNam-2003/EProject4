export class UserRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAll() {
        return this.prisma.user.findMany({
            where: { deletedAt: null },
            include: { profile: true },
            orderBy: { createdAt: "desc" },
        });
    }
    findById(id) {
        return this.prisma.user.findFirst({
            where: { id, deletedAt: null },
            include: { profile: true, agentProfile: true },
        });
    }
    findByEmail(email) {
        return this.prisma.user.findFirst({
            where: { email, deletedAt: null },
        });
    }
    findByPhone(phone) {
        return this.prisma.user.findFirst({
            where: {
                deletedAt: null,
                profile: {
                    phoneNumber: phone,
                },
            },
            include: { profile: true },
        });
    }
    findByEmailOrPhone(email, phoneNumber) {
        return this.prisma.user.findFirst({
            where: {
                deletedAt: null,
                OR: [
                    { email: email },
                    ...(phoneNumber ? [{ profile: { phoneNumber: phoneNumber } }] : []),
                ],
            },
            include: { profile: true },
        });
    }
    create(data) {
        return this.prisma.user.create({
            data,
            include: { profile: true },
        });
    }
    update(id, data) {
        return this.prisma.user.update({
            where: { id },
            data,
            include: { profile: true, agentProfile: true },
        });
    }
    async incrementLoginAttempts(id) {
        await this.prisma.user.update({
            where: { id },
            data: {
                loginAttempts: {
                    increment: 1,
                },
            },
        });
    }
    async resetLoginAttempts(id) {
        await this.prisma.user.update({
            where: { id },
            data: {
                loginAttempts: 0,
                lockUntil: null,
            },
        });
    }
    async updatePassword(id, passwordHash) {
        return this.prisma.user.update({
            where: { id },
            data: {
                passwordHash: passwordHash,
            },
            include: { profile: true },
        });
    }
    async updateStatus(id, status) {
        return this.prisma.user.update({
            where: { id },
            data: {
                status,
            },
            include: { profile: true },
        });
    }
    async delete(id) {
        await this.prisma.user.update({
            where: { id },
            data: { deletedAt: new Date() },
        });
    }
    async restore(id) {
        await this.prisma.user.update({
            where: { id },
            data: { deletedAt: null },
        });
    }
    async getUserWithPasswordByEmail(email) {
        return await this.prisma.user.findFirst({
            where: {
                email,
                deletedAt: null,
            },
        });
    }
}
