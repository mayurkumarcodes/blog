export const BLOG_TITLE = "Mayur Kumar";
export const COLOR_THEME_COOKIE_NAME = "color-theme";

export const LIGHT_COLORS = {
	"--color-text": "hsl(210deg 10% 20%)",            // Dark blue-gray for text
	"--color-primary-100": "hsl(210deg 100% 98%)",    // Very light blue (background-like)
	"--color-primary-300": "hsl(210deg 100% 90%)",    // Light blue
	"--color-primary-500": "hsl(210deg 100% 60%)",    // Medium blue (Main color)
	"--color-primary-700": "hsl(210deg 100% 45%)",    // Darker blue
	"--color-primary-900": "hsl(210deg 100% 30%)",    // Very dark blue
	"--color-primary-contrast": "white",              // White text for contrast

	"--color-secondary-500": "hsl(190deg 100% 50%)",  // Tealish secondary color
	"--color-decorative-100": "hsl(190deg 100% 98%)", // Very light teal (used for page background)
	"--color-decorative-200": "hsl(190deg 100% 90%)", // Light teal
	"--color-decorative-300": "hsl(190deg 100% 75%)", // Medium teal
	"--color-decorative-500": "hsl(190deg 100% 60%)", // Strong teal
	"--color-decorative-600": "hsl(190deg 100% 50%)", // Dark teal
	"--color-decorative-700": "hsl(190deg 100% 40%)", // Darker teal
	"--color-decorative-800": "hsl(190deg 100% 30%)", // Very dark teal
	"--color-decorative-900": "hsl(190deg 100% 20%)", // Deep teal

	"--color-gray-0": "white",                        // White background color
	"--color-gray-100": "hsl(210deg 10% 98%)",         // Very light grayish-blue
	"--color-gray-200": "hsl(210deg 10% 90%)",         // Light grayish-blue
	"--color-gray-300": "hsl(210deg 10% 80%)",         // Medium grayish-blue
	"--color-gray-500": "hsl(210deg 10% 50%)",         // Dark grayish-blue
	"--color-gray-700": "hsl(210deg 10% 35%)",         // Very dark grayish-blue
	"--color-gray-900": "hsl(210deg 10% 20%)",         // Almost black gray
	"--color-gray-1000": "black",                     // Pure black

	// New color assignments
	"--color-primary": "hsl(210deg 100% 60%)",         // Set primary color to medium blue
	"--color-secondary": "hsl(190deg 100% 50%)",       // Set secondary color to teal

	"--color-inline-code-bg": "hsl(45deg 74% 85%)",   // Light yellow background for inline code
	"--color-selection-text": "black",                 // Black text when text is selected
	"--color-selection-background": "hsl(210deg 100% 80%)", // Light blue background when text is selected
	"--color-backdrop": "hsl(210deg 100% 90%)",        // Light backdrop color (light blue)
	"--color-backdrop-highlight": "hsl(210deg 100% 70%)", // Medium blue highlight for backdrop
	"--color-page-background": "white",                // White page background
	"--color-page-border": "transparent",              // No border around the page
	"--color-card-background": "white",                // White background for cards
	"--color-card-border": "hsl(210deg 10% 90%)",      // Very light blue border for cards
};

export const DARK_COLORS = {
	"--color-text": "hsl(0deg 0% 100%)",
	"--color-primary-100": "hsl(50deg 100% 90%)",
	"--color-primary-300": "hsl(50deg 100% 70%)",
	"--color-primary-500": "hsl(50deg 100% 50%)",
	"--color-primary-700": "hsl(50deg 100% 35%)",
	"--color-primary-900": "hsl(50deg 100% 25%)",
	"--color-primary-contrast": "black",
	"--color-secondary-500": "hsl(328deg 100% 50%)",
	"--color-decorative-100": "hsl(256deg 20% 4%)",
	"--color-decorative-200": "hsl(256deg 30% 10%)",
	"--color-decorative-300": "hsl(256deg 30% 15%)",
	"--color-decorative-500": "hsl(256deg 40% 30%)",
	"--color-decorative-600": "hsl(256deg 40% 40%)",
	"--color-decorative-700": "hsl(256deg 40% 50%)",
	"--color-decorative-800": "hsl(256deg 45% 65%)",
	"--color-decorative-900": "hsl(256deg 55% 80%)",
	"--color-gray-0": "black",
	"--color-gray-100": "hsl(256deg 20% 10%)",
	"--color-gray-200": "hsl(256deg 15% 15%)",
	"--color-gray-300": "hsl(256deg 10% 30%)",
	"--color-gray-500": "hsl(256deg 4% 50%)",
	"--color-gray-700": "hsl(256deg 10% 75%)",
	"--color-gray-900": "hsl(256deg 20% 90%)",
	"--color-gray-1000": "white",
};

// Add in semantic / special colors

DARK_COLORS["--color-primary"] = DARK_COLORS["--color-primary-500"];
DARK_COLORS["--color-secondary"] = DARK_COLORS["--color-secondary-500"];
DARK_COLORS["--color-inline-code-bg"] = "hsl(256deg 30% 22%)";
DARK_COLORS["--color-selection-text"] = "white";
DARK_COLORS["--color-selection-background"] = "hsl(256deg 100% 30%)";
DARK_COLORS["--color-backdrop"] = DARK_COLORS["--color-decorative-100"];
DARK_COLORS["--color-backdrop-highlight"] =
	DARK_COLORS["--color-decorative-500"];
DARK_COLORS["--color-page-background"] = "transparent";
DARK_COLORS["--color-page-border"] = "hsl(256deg 30% 50% / 0.2)";
DARK_COLORS["--color-card-background"] = DARK_COLORS["--color-backdrop"];
DARK_COLORS["--color-card-border"] = DARK_COLORS["--color-page-border"];

export const LIGHT_SHADOWS = {
	"--shadow-page": `
    0px 1px 2px hsl(50deg 60% 50% / 0.25),
    0px 3px 6px hsl(50deg 60% 50% / 0.25),
    0px 9px 18px hsl(50deg 60% 50% / 0.25),
    0px 18px 36px hsl(50deg 60% 50% / 0.25),
    0px 54px 108px hsl(50deg 60% 50% / 0.25)
  `,
	"--shadow-card": `
    0px 1px 2px hsl(50deg 20% 50% / 0.2),
    0px 2px 4px hsl(50deg 20% 50% / 0.2),
    0px 4px 8px hsl(50deg 20% 50% / 0.2),
    0px 8px 16px hsl(50deg 20% 50% / 0.2)
  `,
};
export const DARK_SHADOWS = {
	"--shadow-page": "none",
	"--shadow-card": "none",
};

export const LIGHT_TOKENS = {
	...LIGHT_COLORS,
	...LIGHT_SHADOWS,
};

export const DARK_TOKENS = {
	...DARK_COLORS,
	...DARK_SHADOWS,
};
