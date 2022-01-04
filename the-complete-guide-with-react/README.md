# The complete guide with React

## Introduction

1. Introduction

Css design library with pre-built components based on Material Design by Google.
Material design is the design system that Google uses to build UI of Android operating systems.

[https://mui.com/](https://mui.com/)
[https://m3.material.io/](https://m3.material.io/)

- components based library
- supports additional customizations
- work with React
- time saving with production ready components
- prevent writing css from scratch
- modern UI/UX components
- supports fully responsive

## Setting up environment

1. Creating react app

yarn create react-app name --template typescript

2. Material UI installation

yarn add @mui/material @emotion/react @emotion/styled

## Typography

- used to add a text on the web page
- has different types of predefined styles with html tags, heading, paragraph
- main properties
    - variant (to define theme typography style)
    - components (to define html tag)
    - sx (to define styles)
    - most of the css styles are available in props

## Button

- used to add a button on the web page
- has different types of predefined styles
- has different types of Button (IconButton, LoadingButton)
- main properties
    - variant (to define theme typography style - outlined, contained, text)
    - onClick (onClick event)
    - type (button type like submit, reset)
    - sx (to define styles)

## TextField

- used to add form inputs on the web page
- has different types of predefined styles
- properties
    - has same properties as html input
    - sx (to define styles)
