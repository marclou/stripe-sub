import themes from 'daisyui/src/theming/themes';

const config = {
    // REQUIRED
    appName: 'ShipFast',
    // REQUIRED: a short description of your app for SEO tags (can be overwritten)
    appDescription:
        'The NextJS boilerplate with all you need to build your SaaS, AI tool, or any other web app.',
    // REQUIRED (no https://, not trialing slash at the end, just the naked domain)
    domainName: 'shipfa.st',
    mailgun: {
        // subdomain to use when sending emails, if you don't have a subdomain, just remove it. Highly recommended to have one (i.e. mg.yourdomain.com or mail.yourdomain.com)
        subdomain: 'mg',
        // REQUIRED — Email 'From' field to be used when sending magic login links
        fromNoReply: `ShipFast <noreply@mg.shipfa.st>`,
        // REQUIRED — Email 'From' field to be used when sending other emails, like abandoned carts, updates etc..
        fromAdmin: `Marc at ShipFast <marc@mg.shipfa.st>`,
        // Email shown to customer if need support. Leave empty if not needed => if empty, set up Crisp above, otherwise you won't be able to offer customer support."
        supportEmail: 'marc@mg.shipfa.st',
        // When someone replies to supportEmail sent by the app, forward it to the email below (otherwise it's lost). If you set supportEmail to empty, this will be ignored.
        forwardRepliesTo: 'marc.louvion@gmail.com'
    },
    colors: {
        // REQUIRED — The DaisyUI theme to use (added to the main layout.js). Leave blank for default (light & dark mode). If you any other theme than light/dark, you need to add it in config.tailwind.js in daisyui.themes.
        theme: 'light',
        // REQUIRED — This color will be reflected on the whole app outside of the document (loading bar, Chrome tabs, etc..). By default it takes the primary color from your DaisyUI theme (make sure to update your the theme name after "data-theme=")
        // OR you can just do this to use a custom color: main: "#f37055". HEX only.
        main: themes['light']['primary']
    },
    auth: {
        // REQUIRED — the path to log in users. It's use to protect private routes (like /dashboard). It's used in apiClient (/libs/api.js) upon 401 errors from our API
        loginUrl: '/api/auth/signin',
        // REQUIRED — the path you want to redirect users after successfull login (i.e. /dashboard, /private). This is normally a private page for users to manage their accounts. It's used in apiClient (/libs/api.js) upon 401 errors from our API & in ButtonSignin.js
        callbackUrl: '/'
    }
};

export default config;
