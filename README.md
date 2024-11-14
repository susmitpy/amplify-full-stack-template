# Steps to Setup

1. Create a next js app
2. cd into the app
3. Run `amplify init`
4. Run `amplify add api`
5. Run `amplify push`
6. Create virtual environment of python
7. Run `pip install pipenv`
8. Install dependencies required using `pipenv install flask`
9. Update the backend code
10. Update the frontend code
11. Deploy on github 
12. Using aws console, go to the created app
13. Navigate to connect branch and add the github repo
14. Confirm that the detected framework is Nextjs and Amplify Gen1 (should not be gen 2)
15. Download the amplify.yml file from aws console >> app >> hosting >> build settings
16. Add commands for python:
    - '# Set up the Python environment'
    - pip install pipenv
    - pipenv install --dev
