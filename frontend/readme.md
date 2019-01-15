add all dependencies

dependencies added:

npm init
npm i --save react react-dom next
mkdir pages

updated pkg.json file scripts

created .gitignore file

Edit .gitignore to include .next and out folders

wanted to know difference between componentDidMount and getInitialProps
getinitialprops is not always triggered, if component is nested, and there are consecutive
getinitialprops, child will not get triggered
componentdidmount will always be triggered once the component mounts,
when to use which:
when component acts as page use gip (presentational)
when you want to update state upon an ajax call use cdm (functional, class etc)
