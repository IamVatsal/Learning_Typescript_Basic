class UserServiceImpl {
    users = [];
    createUser(name, email) {
        const user = {
            id: this.users.length + 1,
            name,
            email,
            isActive: true,
            createdAt: new Date(),
        };
        this.users.push(user);
        return user;
    }
    getUserById(id) {
        return this.users.find(u => u.id === id);
    }
    updateUserEmail(id, newEmail) {
        const user = this.getUserById(id);
        if (user) {
            user.email = newEmail;
            user.updatedAt = new Date();
            return user;
        }
        return undefined;
    }
    deleteUser(id) {
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
export {};
