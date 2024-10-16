package StepDefinition;

import io.cucumber.java.en.Given;
import utilities.BrowserDriver;

import static pages.HomePage.*;

public class BasePage {

    @Given("User navigates to the AddRemove Page")
    public void User_navigates_to_the_AddRemove_Page() throws InterruptedException {
        new BrowserDriver();
        click_link();
    }
}
