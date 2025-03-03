---
lastUpdated: 2025-03-03 16:14:00+8:00
---
#算法 #icg #nimm游戏

[公平组合游戏 - OI Wiki (oi-wiki.org)](https://oi-wiki.org/math/game-theory/impartial-game/)
[博弈论导读 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/645066672)

$n$堆物品，每堆有$a_i$个，两个玩家轮流取走任意一堆的任意个物品，但不能不取。
取走最后一个物品的人获胜

定义 **必胜状态** 为 **先手必胜的状态**，**必败状态** 为 **先手必败的状态**。
## 结论
$a_1 \oplus a_2 \oplus a_3...\oplus a_n \neq 0$ 当前状态获胜 ，反之，当前状态失败
## 证明
通过推理，我们可以得出下面三条定理：

- 定理 1：没有后继状态的状态是必败状态。
- 定理 2：一个状态是必胜状态当且仅当存在至少一个必败状态为它的后继状态。
- 定理 3：一个状态是必败状态当且仅当它的所有后继状态均为必胜状态。


为什么异或值会和状态的胜负有关？下面给出了这个定理的证明过程。

为了证明该定理，只需要证明下面三个定理：

·定理 1: 没有后继状态的状态是必败状态。

·定理 2: 对于$a_1\oplus a_2\oplus\ldots\oplus a_n\neq0$的局面，一定存在某种移动使得$a_1\oplus a_2\oplus\ldots\oplus a_n=0$。

**==·定理 3: 对于$a_1\oplus a_2\oplus\ldots\oplus a_n=0$的局面，一定不存在某种移动使得$a_1\oplus a_2\oplus\ldots\oplus a_n=0$==**

对于定理 1, 没有后继状态的状态只有一个，即全 0 局面。此时$a_1\oplus a_2\oplus\ldots\oplus a_n=0$。

对于定理 2,不妨假设$a_1\oplus a_2\oplus\ldots a_n=k\neq0$。如果我们要将$a_i$ 改 为  $a_i^{\prime }$,则$a_i^{\prime}=a_i\oplus k$。

假设$k$的二进制最高位 1 为$d$,即$2^d\leq k<2^{d+1}$。根据异或定义，一定有奇数个$a_i$的二进制第$d$

位为 1。满足这个条件的$a_i$一定也满足$a_i>a_i\oplus k$,因而这也是个合法的移动。

对于定理 3,如果我们要将$a_i$改为$a_i^{\prime}$则根据异或运算律可以得出$a_i=a_i^{\prime}$因而这不是个合法的

移动。

对于$a_1\oplus a_2\oplus\ldots\oplus a_n=0$的局面,对于 第 $i$ 位 ,都是 偶数个1, 无论 减多少 都会令 其中一位或多位$i$ 的1的数量由偶数 变为 奇数 ,最终 让 第$i$ 位 不为0