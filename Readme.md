# [Pre Onboarding] 3차 과제 김상표

## 1. 이새미, 코드 바로가기 [설계 코드](https://github.com/shinpanda/wanted-pre-onboarding-challenge-fe-2/blob/master/index.ts) |  [구현 코드](https://github.com/sangpyokim/wanted-pre-onboarding-challenge-fe-ts/blob/main/%EC%9D%B4%EC%83%88%EB%AF%B8/index.ts)

### 피드백

- TTodos 인터페이스:
  - read: 오버로딩 해야함. 안그러면 전체를 가져오는 방븝이 없는거같아용... ex) read(): iTodo[], read(id: number): iTodo | iTodo[]
  - delete: 메소드 분리말고 마찬가지로 오버로딩
    - [오버로딩](https://developer-talk.tistory.com/307)
  - update가 없음
  
## 투두 리스트의 기능

| 기능      | 설명                                     |
| ------------ | -------------------------------------------------- |
|CREATE| 1. 할 일을 추가할 수 있다. |
| | 2. 내용없이 추가할 수 없다. |
|READ| 1. 모든 할 일을 조회할 수 있다. |
| | 2. ID를 기반으로 특정 할 일을 조회할 수 있다. |
|UPDATE| 1. ID를 제외한 모든 속성을 수정할 수 있다. |
| | 2. 특정 할 일의 특정 태그를 수정할 수 있다. |
|DELETE| 1. ID를 기반으로 특정 할 일을 삭제할 수 있다.|
| | 2. 모든 할 일을 제거할 수 있다. |
| | 3. 특정 할 일의 특정 태그를 삭제할 수 있다. |
| | 4. 특정 할 일의 모든 태그를 제거할 수 있다. |
  
### **이미지 클릭하면 크게 보실 수 있습니다!!**

| 설계 코드      | 구현 코드                                        |
| ------------ | -------------------------------------------------- |
| <img  title="이새미 설계 코드" width="450px" src="https://firebasestorage.googleapis.com/v0/b/classmate-e.appspot.com/o/pre%20onboarding%203%2F1%20(1).png?alt=media&token=6b9a30bd-f705-43c1-9b47-9a556b89c9aa" /> | <img  title="이새미 설계 코드" width="450px" src="https://firebasestorage.googleapis.com/v0/b/classmate-e.appspot.com/o/pre%20onboarding%203%2Fcarbon%20(3)%20(1).png?alt=media&token=f02eb8b3-7136-4476-90c8-fd4a9a0f0caf" />  |
