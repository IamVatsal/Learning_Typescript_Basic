interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt?: Date;
}

interface UserService {
    createUser(name: string, email: string): User;
    getUserById(id: number): User | undefined;
    updateUserEmail(id: number, newEmail: string): User | undefined;
    deleteUser(id: number): boolean;
}

class UserServiceImpl implements UserService {
    private users: User[] = [];

    createUser(name: string, email: string): User {
        const user: User = {
            id: this.users.length + 1,
            name,
            email,
            isActive: true,
            createdAt: new Date(),
        };
        this.users.push(user);
        return user;
    }

    getUserById(id: number): User | undefined {
        return this.users.find(u => u.id === id);
    }

    updateUserEmail(id: number, newEmail: string): User | undefined {
        const user = this.getUserById(id);
        if (user) {
            user.email = newEmail;
            user.updatedAt = new Date();
            return user;
        }
        return undefined;
    }

    deleteUser(id: number): boolean {
        const index = this.users.findIndex(u => u.id === id);
        if (index !== -1) {
            this.users.splice(index, 1);
            return true;
        }
        return false;
    }
}

// Usage:
const service = new UserServiceImpl();
const user = service.createUser("Vatsal", "Vatsal@gmail.com");
service.updateUserEmail(user.id, "newemail@gmail.com");
console.log(service.getUserById(user.id));

export {}