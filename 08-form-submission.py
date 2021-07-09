
from time import sleep
from selenium import webdriver

driver = webdriver.Chrome()
driver.get('https://webdriveruniversity.com/Contact-Us/contactus.html')

firstName = driver.find_element_by_css_selector('[name="first_name"]')
lastName = driver.find_element_by_css_selector('[name="last_name"]')
email = driver.find_element_by_css_selector('[name="email"]')
message = driver.find_element_by_css_selector('[name="message"]')
submit = driver.find_element_by_css_selector('[type="submit"]')

firstName.send_keys('John')
lastName.send_keys('Doe')
email.send_keys('johndoe@telsidfnasgalubg.com')
message.send_keys('This is a test')
submit.click()

sleep(5)
driver.quit()