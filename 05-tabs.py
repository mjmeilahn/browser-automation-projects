
from time import sleep
from selenium import webdriver

driver = webdriver.Chrome()
driver.maximize_window() # FULL WINDOW SCREEN

driver.get('https://webdriveruniversity.com')
driver.find_element_by_css_selector('#contact-us').click()
print('Clicked!')
sleep(10)

driver.switch_to.window(driver.window_handles[0])
print('Switched!')
sleep(3)

driver.quit()