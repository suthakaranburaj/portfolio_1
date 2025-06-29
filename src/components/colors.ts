// components/colors.ts

// Brand Colors (consistent across themes)
export const TEAL = process.env.NEXT_PUBLIC_COLOR_TEAL || "#00ccb1";
export const PURPLE = process.env.NEXT_PUBLIC_COLOR_PURPLE || "#7b61ff";
export const YELLOW = process.env.NEXT_PUBLIC_COLOR_YELLOW || "#ffc414";
export const BLUE = process.env.NEXT_PUBLIC_COLOR_BLUE || "#1ca0fb";
export const BLACKISH = process.env.NEXT_PUBLIC_COLOR_BLACKISH || "#141316";

// Theme-specific color schemes
export const themeColors = {
  dark: {
    // Background colors
    primary: "#000000",
    secondary: "#0a0a0a",
    tertiary: "#1a1a1a",
    surface: "#1f1f1f",
    card: "#2a2a2a",
    
    // Text colors
    textPrimary: "#ffffff",
    textSecondary: "#e5e5e5",
    textTertiary: "#a0a0a0",
    textMuted: "#6b7280",
    
    // Accent colors
    accent: "#00ccb1", // Teal
    accentSecondary: "#7b61ff", // Purple
    accentTertiary: "#ffc414", // Yellow
    
    // Border colors
    border: "#333333",
    borderLight: "#404040",
    
    // Status colors
    success: "#10b981",
    warning: "#f59e0b",
    error: "#ef4444",
    info: "#3b82f6",
    
    // Gradient colors
    gradientPrimary: "linear-gradient(135deg, #00ccb1 0%, #7b61ff 100%)",
    gradientSecondary: "linear-gradient(135deg, #ffc414 0%, #ff6b6b 100%)",
    gradientBackground: "linear-gradient(135deg, #000000 0%, #1a1a1a 100%)",
  },
  light: {
    // Background colors
    primary: "#ffffff",
    secondary: "#f8fafc",
    tertiary: "#f1f5f9",
    surface: "#ffffff",
    card: "#ffffff",
    
    // Text colors
    textPrimary: "#1a1a1a",
    textSecondary: "#374151",
    textTertiary: "#6b7280",
    textMuted: "#9ca3af",
    
    // Accent colors
    accent: "#00ccb1", // Teal
    accentSecondary: "#7b61ff", // Purple
    accentTertiary: "#ffc414", // Yellow
    
    // Border colors
    border: "#e5e7eb",
    borderLight: "#f3f4f6",
    
    // Status colors
    success: "#059669",
    warning: "#d97706",
    error: "#dc2626",
    info: "#2563eb",
    
    // Gradient colors
    gradientPrimary: "linear-gradient(135deg, #00ccb1 0%, #7b61ff 100%)",
    gradientSecondary: "linear-gradient(135deg, #ffc414 0%, #ff6b6b 100%)",
    gradientBackground: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
  }
};

// CSS Variables for easy access
export const cssVariables = {
  dark: {
    '--color-primary': themeColors.dark.primary,
    '--color-secondary': themeColors.dark.secondary,
    '--color-tertiary': themeColors.dark.tertiary,
    '--color-surface': themeColors.dark.surface,
    '--color-card': themeColors.dark.card,
    '--color-text-primary': themeColors.dark.textPrimary,
    '--color-text-secondary': themeColors.dark.textSecondary,
    '--color-text-tertiary': themeColors.dark.textTertiary,
    '--color-text-muted': themeColors.dark.textMuted,
    '--color-accent': themeColors.dark.accent,
    '--color-accent-secondary': themeColors.dark.accentSecondary,
    '--color-accent-tertiary': themeColors.dark.accentTertiary,
    '--color-border': themeColors.dark.border,
    '--color-border-light': themeColors.dark.borderLight,
    '--color-success': themeColors.dark.success,
    '--color-warning': themeColors.dark.warning,
    '--color-error': themeColors.dark.error,
    '--color-info': themeColors.dark.info,
  },
  light: {
    '--color-primary': themeColors.light.primary,
    '--color-secondary': themeColors.light.secondary,
    '--color-tertiary': themeColors.light.tertiary,
    '--color-surface': themeColors.light.surface,
    '--color-card': themeColors.light.card,
    '--color-text-primary': themeColors.light.textPrimary,
    '--color-text-secondary': themeColors.light.textSecondary,
    '--color-text-tertiary': themeColors.light.textTertiary,
    '--color-text-muted': themeColors.light.textMuted,
    '--color-accent': themeColors.light.accent,
    '--color-accent-secondary': themeColors.light.accentSecondary,
    '--color-accent-tertiary': themeColors.light.accentTertiary,
    '--color-border': themeColors.light.border,
    '--color-border-light': themeColors.light.borderLight,
    '--color-success': themeColors.light.success,
    '--color-warning': themeColors.light.warning,
    '--color-error': themeColors.light.error,
    '--color-info': themeColors.light.info,
  }
};
