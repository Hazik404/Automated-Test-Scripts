package utilities;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class BrowserDriver {

    public static WebDriver driver;
    public ChromeOptions options;

    // Constructor
    public BrowserDriver() {
        if (driver == null) {  // Initialize only if driver is null
            options = new ChromeOptions();
            options.addArguments("--start-maximized");  // Maximizes the browser window
            driver = new ChromeDriver(options);  // No need for 'this' here
            driver.get("https://the-internet.herokuapp.com/");
        }
    }

    // Method to close the browser
    public void close() {
        if (driver != null) {
            driver.quit();  // Quit WebDriver and close all browser windows
            driver = null;  // Reset driver to null
        }
    }
}
