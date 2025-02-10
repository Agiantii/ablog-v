# tempalte

## tempalte for Workflow 

### auto push to github gh-pages
```yaml
name: Push to DB Branch

on:
  push:
    branches:
      - main  # 当推送到 main 分支时触发

jobs:
  push-to-db:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Repository (main branch)
        uses: actions/checkout@v4

      - name: Set up Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.10'

      # - name: Install Dependencies
      #   run: |
      #     python -m pip install --upgrade pip
      #     pip install -r requirements.txt

      - name: Run Script
        run: python script.py

      - name: Check Result File
        run: |
          if [ ! -f result.txt ]; then
            echo "Error: result.txt does not exist."
            exit 1
          fi

      - name: Ensure Res Directory Exists
        run: mkdir -p res

      - name: Move Result to Res Directory..
        run: |
          mv result.txt res/
      - uses: s0/git-publish-subdir-action@develop
        env:
          REPO: self
          BRANCH: db
          FOLDER: res
          COMMIT_NAME: bot
          COMMIT_EMAIL: anonymous@example.com
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
      # - name: Commit and Push Results
      #   env:
      #     GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
      #   run: |
      #     git config --global user.name 'github-actions[bot]'
      #     git config --global user.email 'github-actions[bot]@users.noreply.github.com'
      #     git add res/.
      #     git commit -m "Update res/result.txt" || echo "No changes to commit"
      #     git push origin main
```
### auto push to server
```yaml
name: Auto Push to Server

on:
  push:
    branches:
      - master
jobs:
  deploy_job:
    runs-on: ubuntu-latest
    name: deploy  blog
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Install Dependencies
        run: npm install -g pnpm && pnpm install
      - name: Build
        run: pnpm build
      - name: debug
        run: ls 
      - name: copy file via ssh password
        uses: appleboy/scp-action@v0.1.7
        with:
          host: ${{ secrets.HOST }}
          username: ${{ secrets.USERNAME }}
          password: ${{ secrets.PASSWORD }}
          port: ${{ secrets.PORT }}
          source: "./dist" # 直接把dist传到服务器 
          target: ${{ secrets.TARGET }}

```