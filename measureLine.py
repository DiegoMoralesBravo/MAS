# importing the module
import cv2
import tkinter as tk
from tkinter import filedialog
from tkinter import messagebox

# function to display the coordinates of
# of the points clicked on the image
def click_event(event, x, y, flags, params):
    global line
    global flag
    global img

    if event == cv2.EVENT_LBUTTONDOWN:
        font = cv2.FONT_HERSHEY_SIMPLEX

        if flag:
            flag = False
            line[0] = (x, y)
            line[1] = 0
            img = cv2.imread(filePath, 1)
            newImg = cv2.circle(img, line[0], 0, (0, 0, 255), 15)
            cv2.putText(img, 'P1 ' + str(line[0]), (x - 40, y - 40), font, 0.5, (0, 0, 255), 2)
            cv2.imshow('image', newImg)
            
        else:
            flag = True
            line[1] = (x, y)
            newImg = cv2.circle(img, line[1], 0, (0, 0, 255), 5)
            cv2.imshow('image', newImg)

        if line[0] != 0 and line[1] != 0:
            lenLineX = abs(line[0][0] - line[1][0])
            
            img = cv2.imread(filePath, 1)  # Reassign the original image to clear the previously drawn line
            cv2.putText(img, 'P1 ' + str(line[0]), (line[0][0] - 40, line[0][1] - 40), font, 0.5, (0, 0, 255), 2)
            cv2.putText(img, 'P2 ' + str(line[1]), (line[1][0] - 20, line[1][1] - 20), font, 0.5, (0, 0, 255), 2)
            newImg = cv2.line(img, line[0], line[1], (0, 0, 255), 3)
            cv2.imshow('image', newImg)
            cv2.waitKey(1)
            
            # Mostrar el cuadro de diálogo de confirmación
            result = messagebox.askyesno("Confirmación", "¿La longitud: " + str(lenLineX) + 'px es correcta?')

            # Comprobar el resultado de la confirmación
            if result:
                cv2.destroyAllWindows()
                return lenLineX

# driver function
if __name__=="__main__":
    root = tk.Tk()
    root.withdraw()
    
    # Get the monitor resolution
    screen_width = root.winfo_screenwidth()
    screen_height = root.winfo_screenheight()
    
    # Ask the user the image files to label
    filePath = filedialog.askopenfilename() # TODO - askopenfilenames... retrieve all the file names
    
    line = [0, 0]
    flag = True
    
    # Read the image
    img = cv2.imread(filePath, 1)
    imgSize = img.shape
    imgHeight = imgSize[0]
    imgWidth = imgSize[1]

    cv2.namedWindow('image', cv2.WINDOW_NORMAL)
    cv2.imshow('image', img)
    
    # Resize the Window, close to the screen resolution
    cv2.resizeWindow('image', screen_width-100, screen_height-150)

    # setting mouse handler for the image and calling the click_event() function
    lineLen = cv2.setMouseCallback('image', click_event)

    # wait for a key to be pressed to exit
    repeatSelection = cv2.waitKey(0)
        
    # close the window
    cv2.destroyAllWindows()
