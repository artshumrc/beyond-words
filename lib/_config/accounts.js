AccountsTemplates.configure({
	confirmPassword: false,
	enablePasswordChange: true,
	forbidClientAccountCreation: true,
	overrideLoginErrors: true,
	sendVerificationEmail: false,
	lowercaseUsername: false,
	showAddRemoveServices: true,
	showForgotPasswordLink: true,
	showLabels: true,
	showPlaceholders: true,
	showResendVerificationEmailLink: false,
	continuousValidation: false,
	negativeFeedback: false,
	negativeValidation: true,
	positiveValidation: false,
	positiveFeedback: true,
	showValidating: true,
	privacyUrl: Config.privacyUrl || null,
	termsUrl: Config.termsUrl || null,
	homeRoutePath: Config.dashboardRoute || null,
	onLogoutHook() {
		return console.log('logout');
	},
	onSubmitHook() {
		return console.log('submitting form');
	},
});

AccountsTemplates.configureRoute('signIn');

// AccountsTemplates.configureRoute('signUp');
//

AccountsTemplates.configureRoute('forgotPwd');
