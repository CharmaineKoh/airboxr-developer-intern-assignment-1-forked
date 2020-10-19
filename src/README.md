# Airboxr Developer Intern Assignment 1

## Instructions

This is a sandbox environment created for you to attempt your assignment. Most libraries you'll need are already installed but you're free to install any additional libraries as you see fit. You may also refer to any resource you wish to in your attempt. To get started, simply fork this sandbox and you can start playing around.

We suggest you turn off the "Preview on edit" setting in your codesandbox preferences so the preview only refreshes when you save your work instead of refreshing everytime you type something. If you find codesandbox to be sluggish feel free to work on your local machine and put your code up in a publicly accessible repo.

## Environment

You are highly encouraged to stick to a React & Typescript setup. For UI, you should use the layout-components provided and any other [MUI](https://material-ui.com/) components you wish to use.

## Objectives

The main objective of this assignment is to develop a SelectSourcePage as per the [design](https://drive.google.com/file/d/1aqTierO6Pgvbpn_UkS5Ry9vIXXmy3W-H/view). As you click the "TEST / DEBUG" button, the page should list all the data sources that you get fetch from an API. Details as follows:

- Fetch data sources from Airboxr's REST API - GET https://api.airboxr.com/data/dataSources
- - NOTE: You need an authorization token to access this api. Your POC at Airboxr will provide you this.
- Parse data returned by the API and list data sources UI as per the design
- In addition to the data sources returned by the API, the page should also show an additional data source with the title "Google Sheets".
- The heart icon should let you mark/unmark a source as favourite. Favourite sources should appear before unmarked sources.
- NOTE: the data source logos are not returned by the API currently. Instead, they're provided within this sandbox under the public folder.

### BONUS

1. Create some sort of a loading UI while waiting for the API to return a response.
2. Develop a search as you go functionality that lets you filter the sources list. For example, if you type "google" in the search box, it should show only google data sources (and not facebook).

## Submission

Once you're done, reach out to your POC at Airboxr with a link to your forked sandbox.
