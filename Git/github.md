# 업데이트 & 가져오기
## git remote update
모든 원격 브랜치를 업데이트하여 최신 상태로 갱신한다. 하지만, 로컬에서 변동 사항을 병합하지는 않는다.
```
$ git remote update
```

## git fech
현재 위치하고 있는 원격 브랜치만 업데이트한다. 하지만, 로컬에서 변동 사항을 병합하지는 않는다.  
-all 옵션을 주면 모든 원격 브랜치를 업데이트할 수 있다
```
$ git fech
```

## git pull
현재 위치하고 있는 원격 브랜치를 업데이트하고 로컬에서 변동 사항을 병합한다.  
로컬 브랜치를 업데이트할 때 사용한다.  
```
$ git pull
```

# 로컬에서 github 저장소에 내보내기
## git add
"commit의 전단계"  
commit을 하고자 하는 파일들은 commit하기전에 add를 해줘야 commit할 수 있다.  
이렇게 굳이 commit하기 전에 add를 나눠서 하는 이유는 버전관리의 편의성 때문이다.  
```
모든 파일
$ git add .

특정 파일
$ git add 파일명
ex) git add index.html
```

## git commit 
"git에 저장하는단계"  
commit을 해주면 commit을 한 곳으로 언제든지 다시 돌아올수있기때문에 코드의 추가, 삭제가 자유로워진다.  
```
$ git commit -m"커밋메시지"
```

## git rm --cached
이미 add를 했더라도 rm--cached 파일명을 통해서 add를 안한 상태로 돌아갈 수 있다.  
git rm --cached index.html 의 명령어를 실행한 뒤, 커밋의 대상으로 들어갔던  
index.html 이 다시 추적하지 않는 파일  (untracked files)로 돌아간 것을 볼 수 있다.
```
$ git rm --cached 파일명
```

## git add & commit 한꺼번에 하기
**새로 추가된 (untracked) 파일이 없을 때 한정**
```
$ git commit -am "커밋 메세지"
```

## git log
git log를 통해서 지난 commit내용들을 모두 확인할 수 있다.  
git log에서는 커밋된 순서, 커밋메시지, 만든이 그리고 해시정보를 얻을 수 있다.  
여기서 얻은 해시정보를 통해서 commit된 상태를 시간여행하듯이 수정할 수 있다.(해시는 commit이라는 글자옆에있는 영문+문자값)
```
$ git log
```

## git push
git add & commit 된 내용들 github 서버에 내보내기
```
$ git push
```

# Branch
## git branch 생성
브랜치를 생성하는 명령어는 git branch이며   
첫번째 매개변수는 생성하려는 브랜치명이고 
두번째는 분기해 나올 브랜치명이다.
```
$ git branch 브랜치명 분기해나올브랜치명
ex) git branch junwoo main
```

## git branch 삭제
```
$ git branch -d 브랜치명
```

## git branch 이름 변경
```
$ git branch -m 브랜치명 새로운브랜치명
ex) git branch -m main master
```

~~## git checkout~~
~~현재 브랜치에서 다른 브랜치로 이동하려면 checkout 명령어를 사용한다.~~
```
$ git checkout 이동하려는브랜치명
```
~~브랜치 생성과 체크아웃을 한번에 하려면 git checkout -b (branch이름)을 입력한다.~~
```
$ git checkout -b 새로운브랜치이름
```

## git switch
현재 브랜치에서 다른 브랜치로 이동하려면 checkout 명령어를 사용한다. checkout 과의 차이점은
git 의 2.23 버전 부터 checkout 명령을 대신할 switch 와 restore 명령이 도입되었다.
checkout 명령이 이름과 다르게 이런저런 용도로 사용되어 혼란을 줄 수 있기 때문에 두 명령으로 분리한것

현재 branch 에서 다른 branch 로 이동하고 싶을 때
```
$ git switch 이동하고 싶은 브랜치 명

브랜치 생성과 이동을 한번에 하고 싶을 때

$ git switch -c 생성하고 싶은 브랜치 명

여기서 -c 는 create 를 뜻한다.
```

## 브랜치 관리
#### 현재 브랜치 확인하기
```
단순 브랜치 확인
$ git branch 

상세내용 확인 (그렇게 상세하진 않고 최근 commit 기록 정도 확인 가능)
$ git branch -v
```
#### 브랜치 상태 확인
현재 Checkout한 브랜치를 기준으로 --merged와 --no-merged 옵션을 사용하여 Merge된 브랜치인지 그렇지 않은지 필터링해 볼 수 있다.

```
--merged 옵션
이미 Merge한 브랜치 목록을 확인

$ git branch --merged
iss53
* main

iss53 브랜치는 Merge한 브랜치로 목록에 나타난다. 또 * 기호가 붙어있지 않으므로 git branch -d 명령으로 삭제해도 되는 브랜치다.
```
```
--no-merged 옵션br
반대로 현재 Checkout한 브랜치에 Merge하지 않은 브랜치를 살펴본다.

$ git branch --no-merged
testing

Merge 하지 않은 커밋을 담고 있는 브랜치는 git branch -d 명령으로 삭제되지 않는다. Merge하지 않은 브랜치를 강제로 삭제하려면 -D 옵션으로 삭제한다.
```

## git merge
분기된 branch 와 현재 branch 를 합치고 싶을때
```
$ git switch 합쳐질 브랜치
$ git merge 합칠 브랜치
```

