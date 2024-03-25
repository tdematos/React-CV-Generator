# React-CV-Generator

## About

**ResGen** is a resume generator app. This app allows you to input your information into forms, and the values will appear on the resume page.

**On the resume you can input:**

- Your Name
- Contact Information
- Education Information
- Work Information

This resume also has the function so that you can click on the **Print** button and either print or save your resume as a PDF on your machine.

## Why

This is an application that I built using `React`. I also stuck to using `JavaScript` based code instead of `TypeScript`, as this was one of my first React applications. This way I would only have to worry about debugging `React` instead of also having to worry about `TypeScript.

Allthough, at some point in the future, I will probably convert the code over to `TypeScript`.

## How

### V1.0

I started this application using a combination of technologies which included:

- `React` JavaScript framework for builing the application
- `Vite` Modern front-end build tool and development server
- `Node` JavaScript run time enviroment
- `Netlify` Application hosting service

To build the application I began by planning the layout that I wanted the **Resume Generator** to have:

**Main Area**
-- |
-- |-**Toggle Section**
-- |-**Form Section**
-- |-**Resume Page**
-- |-**Print Button**

All of the `sections` where individual components that were all under the **Main area** which was labeled as the `section` component.

Once I did this, I started to create the shape of the body by using `jsx`. I then create a `css`file for each corisponding component.

> Note: In the future, I will create a seperate stying folder for just css code, as nesting the files under the corresponding component folder gets very confusing and it is also very time-consuming.

I made a folder for each `component` and nested both the `.jsx` file and the `.css` under the same folder.

After this, I began working on the resume page, as I wanted to set up the format and styling for how everything was going to show on the page, and after, I did not want to worry about this.

Everything that felt repetitive, I started to create a **sub-component**. By creating these, I was able to create the format, and pass `props` to the `resume` component.

From the resume component, I also made sure to pass `props` and I lifted up the state the the closest ancestor component to all which was the `section` component.

I did this because, I wanted to work with functionality, under 1 component, and wanted to simplify things as much as possible.

I then began to work on the `form` components. This is were all of the `input` elements were located. I proceeded to do the same thing, and made sure that I passed `props` where it was nessesary, and lifted up the state to the `section` component.

My mission now, was to make the `input` elements dynamic, meaning -- If I typed in them, they would automatically render on the `resume` component and show up on the screen.

Doing this for the `personal` and `education` components were not too hard. I added `onChange` attributes to the `input` elements. I then created a `state` to capture the `event` of when I typed. I then passed the `setState` function inside of a `function` where I handled this change.

That `function` took the `event` as a parameter, and then called `event.target.value` on the change. After the `handlFunction` as created it was passed to the `onChange` property and then I passed the initial state inside of the corresponding `prop` in the resume section. Which allowed for the values to change dynamically.

The next challenge was for me to **render** a `work experience` form and resume section. To do this, I took advantage of the `.map` method, and used this to generate various components. I also did use an `if ()` statement to only limit adding up to 3 secitons so that they did not come off of the resume page.

Once this was done, I had to create an `array` of `objects` that would hold the values of the input that I created. I used another `useState` mechanism to do this.

I also create a `function` to handle this change, and since state is **immutable** in `React` I had to create, and resplace the `array` and `objects` throught hat `function`.

I also had to independently pass functions throught the input elements so that I would be able to dynamically achieve these changes.

## Future Updates

Section coming soon...

## Instructions to run code

Navigate to your desired directory:

`cd <./directory>`

Clone repistory to a local folder using the SSH key:

`git clone git@github.com:tdematos/React-CV-Generator.git`

