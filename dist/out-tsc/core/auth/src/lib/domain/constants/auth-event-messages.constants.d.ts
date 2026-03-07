export declare const AUTH_MESSAGES: {
    readonly loginSuccess: {
        readonly summary: "Login Successful";
        readonly detail: (userName: string) => string;
    };
    readonly registerSuccess: {
        readonly summary: "Registration Successful";
        readonly detail: (userName: string) => string;
    };
    readonly loginError: {
        readonly summary: "Login Failed";
        readonly detail: (message: string) => string;
    };
    readonly registerError: {
        readonly summary: "Registration Failed";
        readonly detail: (message: string) => string;
    };
    readonly logout: {
        readonly summary: "Logged Out";
        readonly detail: "You have been logged out successfully.";
    };
};
//# sourceMappingURL=auth-event-messages.constants.d.ts.map