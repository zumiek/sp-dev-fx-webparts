# Questions and Answers

## Summary

This is an application that supports Questions & Answers through a web part that can be used directly on a Modern SharePoint Site without the need for Yammer or a backing Microsoft Team site.  It relies on a backing SharePoint list that is hidden and a provisioned Site Page that hosts a pre-configured version of the questions web part.

![Questions and Answers](./assets/QuestionsAndAnswers.gif)

## Used SharePoint Framework Version

![1.11.0](https://img.shields.io/badge/version-1.11.0-green.svg)

## Applies to

* [SharePoint Framework](https://docs.microsoft.com/sharepoint/dev/spfx/sharepoint-framework-overview)
* [Office 365 tenant](https://docs.microsoft.com/sharepoint/dev/spfx/set-up-your-development-environment)

## Prerequisites

* Office 365 subscription with SharePoint Online
* SharePoint Framework [development environment](https://docs.microsoft.com/sharepoint/dev/spfx/set-up-your-development-environment) set up

## Solution

Solution|Author(s)
--------|---------
react-questions-and-answers | Bo George ([@bo_george](https://twitter.com/bo_george))

## Version history

Version|Date|Comments
-------|----|--------
1.0|September 13, 2020|Initial release

## Disclaimer

**THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

---

## Minimal Path to Awesome

* Clone this repository
* in the command line run:
  * `npm install`
  * `gulp serve`

### Slightly Longer Path to More Awesome

*To really get the full experience go to the workbench on a SharePoint Site [Your site url]/_layouts/15/workbench.aspx and that's where the magic will happen but this requires that you deploy and activate features to provision the required SharePoint assets*

1. Run one of the following custom commands to clean, build, bundle and package the solution.
    * If you want to be able to debug using your local code using gulp serve
    `gulp package`
2. Navigate to the output `questions-application.sppkg` (found in the `/sharepoint/solution` folder)
3. Upload it to an application catalog (either a tenant or site collection one)
4. In your site collection go to **Site Contents** and click **New** > **App**
5. Find and add the **Questions Application** App 
    * wait for it to finish installing and activating features on the **Site Contents** page
6. Go to a site page like home, edit the page and find and add the **Questions** web part
    * If you deployed a shippable (SharePoint Online) version you don't need to do anything else
    * If you deployed a debug (http://localhost:4321) version you'll need to ensure gulp serve is running

## Features

Below is intended to provide “notable” details on different features.  Notable meaning, they may be different than a typical expectation or require clarification.  For all features see “Features based Questions Role” to understand if they are available for a specific role. 

### Questions

Feature|Details
-------|-------
Search for a Question|After 3 characters are entered in the search box the list of questions will filter based on matching somewhere in the question title 
Show List of Questions by All, Answered or Open|Allows a user when viewing the list of Questions to only show those that are answered or not answered (open) in addition to seeing all.
View a Question and Replies|
Ask a Question|Title and details are required to Post 
Edit a Question|Title and details are required to Post. Available on Gear icon. 
Delete a question|Deletes the question (and replies when done by moderator). Available on Gear icon. 
Follow/Unfollow a Question|Filled envelop if followed & empty envelop if not followed for the current user.  Used to drive email notification on questions. 
Like/Unlike a Question|Filled thumbs if liked & empty thumbs if not. Count should be for all likes on the Question but not including replies. 

### Replies

Feature|Details
-------|-------
Reply to a Question or Reply|
Edit a Reply|
Delete a Reply|Deletes the reply (and replies when done by moderator). Available on Gear icon.
Like/Unlike a Reply|Filled thumbs if liked & empty thumbs if not.
Mark/Unmark a Reply as Helpful|Filled star if liked & empty star if not.  Count should be for all helpful items on the Reply but not including replies
Mark/Unmark a Reply as Correct Answer|When marked as correct answer a banner will show with “CORRECT ANSWER”.  Copy of reply is promoted just below question so that long thread doesn’t have to be viewed for the answer.  Unmarking will remove the banner and the copy of reply promoted to the to of the thread.  Available on Gear icon.

## User Roles Overview

The Questions web part relies on the standard SharePoint Groups and the permissions they are granted.

Questions Role|SharePoint Group|Details 
--------------|----------------|-------
Moderator|Site owners|Users in this group are treated as moderators of Questions with additional capabilities and notifications than others outlined below.
Contributor|Site members|Users in this group are treated as “typical” users and considered contributors to questions by default.
Viewer|Site visitors|By default, users in this group can only view questions and replies.
Contributor|Site visitors|Within the web part there is a toggle that allows a Site owner to grant visitors the same capabilities as a site member on questions.  When set to ‘Yes’ site visitors are considered contributors to questions.

## Features based Questions Role

The table below shows what features and capabilities a user can perform for each role.  Where a feature is dynamic (such as questions entered by others or me) separate line items call out the different behaviors.

Feature|Moderator|Contributor|Viewer
-------|---------|-----------|------
**Questions**|||
Search for a Question|Yes|Yes|Yes
View a list of Questions|Yes|Yes|Yes
Show List of Questions by All, Answered or Open|Yes|Yes|Yes
View a Question and Replies|Yes|Yes|Yes
Ask a Question|Yes|Yes|No
Edit a Question - Entered by me|Yes|Yes|No
Edit a Question - Entered by others|No|No|No
Delete a question - Entered by me with no replies|Yes|Yes|No
Delete a question - Entered by me with replies|Yes|No|No
Delete a question - Entered by others with no replies|Yes|No|No
Delete a question - Entered by others with replies|Yes|No|No
Follow/Unfollow a Question|Yes|Yes|No
Like/Unlike a Question|Yes|Yes|No 
**Replies**||| 
Reply to a Question or Reply|Yes|Yes|No 
Edit a Reply - Entered by me|Yes|Yes|No 
Edit a Reply - Entered by others|No|No|No 
Delete a Reply - Entered by me with no replies|Yes|Yes|No 
Delete a Reply - Entered by me with replies|Yes|No|No 
Delete a Reply - Entered by others with no replies|Yes|No|No 
Delete a Reply - Entered by others with replies|Yes|No|No 
Like/Unlike a Reply|Yes|Yes|No 
Mark/Unmark a Reply as Helpful|Yes|Yes|No 
Mark/Unmark a Reply as Correct Answer - Question entered by me|Yes|Yes|No 
Mark/Unmark a Reply as Correct Answer - Question entered by others|Yes|No|No 

<img src="https://telemetry.sharepointpnp.com/sp-dev-fx-webparts/samples/react-questions-and-answers" />
