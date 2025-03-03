---
lastUpdated: 2025-03-03 16:13:38+8:00
---
BIT（binary indexed tree)
[树状数组(详细分析+应用)](https://blog.csdn.net/TheWayForDream/article/details/118436732)
## 例题
### 三元组 
#### 链接[4709. 三元组 - AcWing题库](https://www.acwing.com/problem/content/description/4712/)
#### solution 
 >遍历 $a_j$ , res+= 前面大于 $a_j$的个数 $\times$  后面小于 $a_j$的个数
 >=== (前面的总个数- 前面小于 $a_j$的个数)  $\times$  后面小于 $a_j$的个数==
 >用离散化(lower_bound实现) 消除等于的存在 

```cpp
#include <bits/stdc++.h>

using namespace std;

#define debug(x) cout<<#x<<" = "<<x<<endl;
#define lowbit(x) (x&-x)
#define endl '\n'

typedef long long LL;
typedef pair<int,int> PII;
const int N =1e6+10,M=1e8+10;
const int inf = 0x3f3f3f3f;

class BIT{
    private:
        vector<int> cnt;
        int n;
    public:
        BIT(int sz){
            n=sz;
            cnt.resize(sz+1);
        }
        void add(int x,int d){
            for(int i=x;i<=n;i+=lowbit(i)){ 
                cnt[i]+=d;
            }
        }
        int query(int x){
            int res=0;
            for(int i=x;i>0;i-=lowbit(i)){
                res+=cnt[i];
            }
            return res;
        }
};
int n;
int a[N],b[N];
LL res=0;
signed main() 
{
    ios::sync_with_stdio(0),cin.tie(0),cout.tie(0);
    cin>>n;
    for(int i=1;i<=n;i++){
        cin>>a[i];
        b[i]=a[i];
    }
    sort(a+1,a+1+n);
    BIT bit = BIT(n+1);
    for(int i=1;i<=n;i++){
        int el = b[i];
        int j = lower_bound(a+1,a+1+n,b[i])-a;
        // debug(j);
        int q = bit.query(j);
        res += (LL) (i-1-q)*(j-1-q);
        bit.add(j,1);
    }
    cout<<res<<endl;
    return 0;
}   
```
## 总结 
```cpp
#define lowbit(x) (x&(-x))
// 用 t[x] 表示 func[x-lowbit(x)+1,x]的区间某个属性
// func可以是 sum 等
// 树状数组 是一颗 树,


//单点修改,区间查询

// x 是 位置 ,k是 加的值 add 是加某一个点
int add(int x,int k){
	for(int i=x;i<=n;i+=lowbit(i)) t[x]+=k;
}
// 返回 sum[1,x] 
int sm(int x){
	int ans=0;
	for(int i=x;i;i-=lowbit(i))ans+=t[i];
	return ans;
}
// 返回 sm[l,r]=sm[1,r]-sm[1,l-1]
int search(int l,int r){
	return sm[r]-sm[l-1];
}


// 区间修改, 单点查询 

// 构造 差分数组 c ,维护 c 数组即可(像修改单点那般)

// l,r 区间 +k
void update(int l,int r,int k){
	add(l,k);
	add(r+1,-k);
	//这里的 add 函数 修改的点改为 c差分数组即可
}
void search(int x){
	int ans=0;
	for(int i=x;i;i-=lowbit(i)) ans+=c[i];
	return  ans;
}

```
