/*package stepDefination.login;



import org.openqa.selenium.By; 
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.DesiredCapabilities;

//import cucumber.annotation.en.Given; 
//import cucumber.annotation.en.Then; 
//import cucumber.annotation.en.When;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class loginStepdefs {
	
WebDriver driver = null;

//@SuppressWarnings("deprecation")
@Given("^I have open the browser$")
	public void openBroser() {
	//driver = new FirefoxDriver();	
	//System.setProperty("webdriver.gecko.driver", "D:/Software/geckodriver.exe");
	//Now you can Initialize marionette driver to launch firefox
	//DesiredCapabilities capabilities = DesiredCapabilities.firefox();
	//capabilities.setCapability("marionette", true);
	//driver = new marionette(capabilities);
	
	System.setProperty("webdriver.chrome.driver", "D:\\Software\\chromedriver.exe");	
	driver = new ChromeDriver(); 
	
	}

@When("^I open website \"(.*)\"$")
public void goToUrl(String url) { 
    driver.navigate().to(url);  //https://www.facebook.com/  http://www.spicejet.com/
 } 

@Then("^Login button should exits$")
public void loginButton() { 
	//ctl00_HyperLinkLogin
   if(driver.findElement(By.xpath("//a[@id='ctl00_HyperLinkLogin']")).isEnabled()) { 
      System.out.println("Test 1 Pass"); 
   } else { 
      System.out.println("Test 1 Fail"); 
   } 
   driver.close(); 
}


}

*/
