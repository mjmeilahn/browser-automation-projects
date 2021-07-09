
from time import sleep
from selenium import webdriver

driver = webdriver.Chrome()
driver.get('https://www.w3schools.com/html/html5_video.asp')

driver.execute_script('console.log("I\'m in the browser console!");')
value = driver.execute_script("const video = document.querySelector('#video1'); return video.paused;")
print(value)

sleep(10)
driver.quit()