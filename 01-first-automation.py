
from selenium import webdriver


driver = webdriver.Chrome()
driver.get('https://webdriveruniversity.com')
driver.find_element_by_css_selector('#login-portal').click()
title = driver.title
print('Title is: ' + title)

driver.quit()