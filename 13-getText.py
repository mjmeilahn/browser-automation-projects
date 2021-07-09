
from typing import Text
from selenium import webdriver

driver = webdriver.Chrome()
driver.get('https://webdriveruniversity.com/Hidden-Elements/index.html')

text = driver.find_element_by_css_selector('h1').text
print(text)

driver.quit()