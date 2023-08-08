interface User {
    _id: string;
    name: string;
    email: string;
    batch: string;
    program: string;
    avatar: string;
    registrationNumber: string;
    sectionCode: string;
    isLogged: boolean;
};

export type { User };