export const confirmRule = (message, name) => {
    return [
        {
            required: true,
            message,
        },
        ({ getFieldValue }) => ({
            validator(_, value) {
                if (!value || getFieldValue(name) === value) {
                    return Promise.resolve();
                }

                return Promise.reject(new Error(message));
            },
        }),
    ];
};
export const requiredRule = (label = "Field") => {
    return {
        required: true,
        message: `${label === "" ? "Field" : label} is required`,
    };
};
export const isRequired = (message) => {
    return {
        required: true,
        message,
    };
};

export const ValidationRules = (name = "") => {
    const Rules = {
        RequiredRule: {
            required: true,
            message: "Please input " + name.replaceAll("_", " ") + "!",
        },
        onlyNumber: {
            pattern: /^[0-9]+$/,
            message: "Please input only numbers",
        },
    };

    return Rules;
};