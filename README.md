# ZenFocus Chrome Extension

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [Setting the Timer](#setting-the-timer)
  - [Adding Custom Websites to Block](#adding-custom-websites-to-block)
  - [Stopping the Timer](#stopping-the-timer)
- [Customization](#customization)
  - [Adjusting the Design](#adjusting-the-design)
- [Technology Stack](#technology-stack)
- [Contributing](#contributing)
- [Known Issues](#known-issues)
- [License](#license)
- [Contact](#contact)

---

## Introduction

Welcome to **ZenFocus**, a Chrome extension designed to help you stay focused and productive by blocking distracting websites for a specified period. Whether you're studying, working, or simply trying to cut down on screen time, ZenFocus ensures you stay on track by preventing access to websites that could disrupt your concentration.

With ZenFocus, you can not only block a predefined list of common distractions but also add custom websites to your block list directly from the extension's interface.

## Features

- **Custom Timer:** Set a timer to block distracting websites for a duration that suits your needs.
- **Predefined Website Blocking:** Automatically blocks popular distractions such as Facebook, YouTube, and Instagram.
- **Add Custom Websites:** Easily add additional websites to the block list from the popup.
- **Simple Interface:** Clean, user-friendly design with a positive, motivating vibe.
- **Quick Control:** Start or stop the blocking timer with a single click.
- **Alerts:** Receive a notification when the blocking period is over.

## Installation

To install ZenFocus, follow these steps:

1. **Download the Extension Files:**
   - Clone this repository to your local machine using:
     ```bash
     git clone https://github.com/RejectedStar/ZenFocus.git
     ```
   - Alternatively, download the repository as a ZIP file and extract it.

2. **Load the Extension in Chrome:**
   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable **Developer mode** by toggling the switch in the upper right corner.
   - Click **Load unpacked** and select the folder where you saved the extension files.

3. **Start Using the Extension:**
   - The ZenFocus icon should now appear in your Chrome toolbar. Click on it to open the popup and start setting your focus time!

## Usage

### Setting the Timer

1. Click on the ZenFocus icon in the Chrome toolbar to open the popup.
2. Enter the desired time (in minutes) in the input field.
3. Click **Start** to begin blocking the predefined websites for the set duration.
4. The status message will update, indicating that the blocking is active.

### Adding Custom Websites to Block

1. In the popup, enter the URL of any additional websites you want to block in the "Add Website to Block" input box.
2. Click **Add** to include the site in the block list.
3. The site will be blocked along with the predefined websites for the duration of the timer.

### Stopping the Timer

1. To stop the blocking period early, click the **Stop** button in the popup.
2. The extension will immediately stop blocking the websites, and the status message will update to reflect this.

## Customization

### Adjusting the Design

The design of ZenFocus can be customized by modifying the `style.css` file. You can change colors, fonts, and layout elements to better match your personal preferences.

## Technology Stack

- **JavaScript:** Core logic for the extension.
- **HTML/CSS:** Structure and styling for the popup interface.
- **Chrome Extensions API:** Integration with the Chrome browser.

## Contributing

We welcome contributions to improve ZenFocus. If you'd like to contribute:

1. Fork this repository.
2. Create a new branch (`feature/your-feature-name`).
3. Make your changes.
4. Submit a pull request for review.

Please ensure your code adheres to the existing coding style and passes all tests.

## Known Issues

- The extension currently blocks only the predefined and user-added websites. More complex blocking capabilities (e.g., blocking entire categories of sites) may be implemented in future updates.
- The timer countdown is not displayed in real-time within the popup.
- Blocking may not be effective on websites that use subdomains or redirects. Additional customization may be needed for these cases.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

For any questions, suggestions, or feedback, please contact.