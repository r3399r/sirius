# Sirius

## Description
狼人殺復盤記錄工具網頁程式

分析玩家的應對、策略

## URL
TEST: [https://sirius-test.celestialstudio.net/](https://sirius-test.celestialstudio.net/)

PROD: [https://sirius.celestialstudio.net/](https://sirius.celestialstudio.net/)

## Development Steps
### Install
```shell
git clone https://github.com/r3399r/sirius.git

# install
npm install

# frontend install
cd frontend
npm install
```

### Create Branch
We would not push our changes directly to the `dev` branch on any condition. Therefore, we need to create a new feature branch and develop on it.
```shell
git branch {name}
git checkout {name}
```

### Commit & push
Before you commit your code change, you may run `npm run fix` first to make the code style be consistent. And then run the following scripts,
```shell
npm run commit
npm run push
```

### Create PR
After the change is push to your branch, then we need to create a PR (pull request) on Github. When the review is finished, we can merge into `dev` branch. And the CI/CD process would be triggered, and we can check the latest app on TEST environemnt.

## Production
1. create release branch `git branch release-x.x.x`
2. change npm versions
3. release branch merge to `master`
4. `master` merge to `dev`
