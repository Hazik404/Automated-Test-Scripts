package pages;

import org.openqa.selenium.By;
import utilities.BrowserDriver;

public class HomePage extends BrowserDriver {

    public static String link_xpath = "//*[@id=\"content\"]/ul/li[2]/a";

    public static void click_link() throws InterruptedException {
        Thread.sleep(2000);
        BrowserDriver.driver.findElement(By.xpath(link_xpath)).click();
    }

}
