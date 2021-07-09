
from time import sleep
from selenium import webdriver

driver = webdriver.Chrome()

driver.get('https://webdriveruniversity.com/Ajax-Loader/index.html')
sleep(7)
driver.find_element_by_css_selector('#button1').click()
sleep(7)
driver.quit()