
from time import sleep
from selenium import webdriver

driver = webdriver.Chrome()
driver.get('https://webdriveruniversity.com')

title = driver.title
print('Title is: ' + title)

driver.find_element_by_css_selector('#contact-us').click()

sleep(10)
driver.quit()