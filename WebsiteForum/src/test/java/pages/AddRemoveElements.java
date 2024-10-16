package pages;

import org.openqa.selenium.By;
import utilities.BrowserDriver;

public class AddRemoveElements extends BrowserDriver {
    public static String btn_xpath = "//*[@id=\"content\"]/div/button";
    public static String btn_string_xpath = "//*[@id=\"elements\"]/button";

    public static void click_btn() throws InterruptedException {
        Thread.sleep(2000);
        BrowserDriver.driver.findElement(By.xpath(btn_xpath)).click();

    }

    public static void viz_btn() throws InterruptedException {
        Thread.sleep(2000);
        String gettext = BrowserDriver.driver.findElement(By.xpath(btn_string_xpath)).getText();

    }





}
