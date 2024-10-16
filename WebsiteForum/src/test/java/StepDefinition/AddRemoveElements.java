package StepDefinition;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import utilities.BrowserDriver;

import static pages.AddRemoveElements.*;
public class AddRemoveElements {

    @When("User click on Add Element button")
    public void btn_click() throws InterruptedException {
        new BrowserDriver();
        click_btn();
    }

    @Then("Delete button should shown")
    public void del_btn() throws InterruptedException {
        new BrowserDriver();
        viz_btn();
    }
}
