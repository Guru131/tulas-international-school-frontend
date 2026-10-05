// src/utils/security.js
// Client-side code protection & anti-inspect utilities.
// Prevents right-click inspect, devtools shortcuts, and source view.

export function initCodeProtection() {
  if (typeof window === "undefined") return;

  // 1. Disable Right-Click (Context Menu)
  const handleContextMenu = (e) => {
    e.preventDefault();
    return false;
  };

  // 2. Disable Developer Tools & View-Source Key Combinations
  const handleKeyDown = (e) => {
    // F12 key (DevTools)
    if (e.key === "F12" || e.keyCode === 123) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    const isCtrlOrCmd = e.ctrlKey || e.metaKey;

    // Ctrl+Shift+I (Inspect), Ctrl+Shift+J (Console), Ctrl+Shift+C (Element Picker)
    if (isCtrlOrCmd && e.shiftKey) {
      const key = e.key ? e.key.toUpperCase() : "";
      if (key === "I" || key === "J" || key === "C") {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    }

    // Ctrl+U (View Source)
    if (isCtrlOrCmd && (e.key === "u" || e.key === "U" || e.keyCode === 85)) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    // Ctrl+S (Save Page)
    if (isCtrlOrCmd && (e.key === "s" || e.key === "S" || e.keyCode === 83)) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  };

  // 3. Clear Console & Add Warning
  try {
    console.clear();
    console.log(
      "%c🛡️ Tulas International School",
      "color: #c9a84c; font-size: 20px; font-weight: bold; background: #0c1b33; padding: 8px 16px; border-radius: 6px;"
    );
    console.log(
      "%cThis website is protected. Inspecting and copying source code is restricted.",
      "color: #64748b; font-size: 13px;"
    );
  } catch {
    // Ignore console clearing restrictions if any
  }

  // Attach event listeners
  document.addEventListener("contextmenu", handleContextMenu, { capture: true });
  document.addEventListener("keydown", handleKeyDown, { capture: true });

  // Return cleanup function
  return () => {
    document.removeEventListener("contextmenu", handleContextMenu, { capture: true });
    document.removeEventListener("keydown", handleKeyDown, { capture: true });
  };
}
