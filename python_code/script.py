import pyautogui

# Set the coordinates of the desired spot
target_x = -692  # Replace with the X-coordinate of your target spot
target_y = 643   # Replace with the Y-coordinate of your target spot

# Store the original mouse coordinates before clicking
original_x, original_y = pyautogui.position()

# Simulate a click at the specified spot
pyautogui.click(target_x, target_y)

# Move the mouse back to its original position
pyautogui.moveTo(original_x, original_y)
 