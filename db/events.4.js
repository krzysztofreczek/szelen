'use strict';

var events_4 = [
{date:"2020/9/30",user:"Basia"},
{date:"2020/9/29",user:"Majkel"},
{date:"2020/10/7",user:"Ania"},
{date:"2020/10/10",user:"Majkel"},
{date:"2020/10/11",user:"Basia"},
{date:"2020/10/13",user:"Ania"},
{date:"2020/10/16",user:"Krzysio"},
{date:"2020/10/14",user:"Basia"},
{date:"2020/10/14",user:"Majkel"},
{date:"2020/10/20",user:"Krzysio"},
{date:"2020/10/20",user:"Majkel"},
{date:"2020/10/24",user:"Krzysio"},
{date:"2020/10/19",user:"Basia"},
{date:"2020/10/26",user:"Krzysio"},
{date:"2020/10/29",user:"Krzysio"},
{date:"2020/11/1",user:"Krzysio"},
{date:"2020/11/5",user:"Krzysio"},
{date:"2020/11/1",user:"Majkel"},
{date:"2020/11/5",user:"Ania"},
{date:"2020/11/6",user:"Majkel"},
{date:"2020/11/8",user:"Krzysio"},
{date:"2020/11/10",user:"Ania"},
{date:"2020/11/11",user:"Majkel"},
{date:"2020/11/15",user:"Krzysio"},
{date:"2020/11/15",user:"Basia"},
{date:"2020/11/18",user:"Ania"},
{date:"2020/11/20",user:"Krzysio"},
{date:"2020/11/14",user:"Majkel"},
{date:"2020/11/21",user:"Majkel"},
{date:"2020/11/21",user:"Basia"},
{date:"2020/11/23",user:"Krzysio"},
{date:"2020/11/25",user:"Krzysio"},
{date:"2020/11/27",user:"Krzysio"},
{date:"2020/11/29",user:"Basia"},
{date:"2020/11/27",user:"Majkel"},
{date:"2020/12/5",user:"Krzysio"},
{date:"2020/12/5",user:"Majkel"},
{date:"2020/12/13",user:"Krzysio"},
{date:"2020/12/14",user:"Krzysio"},
{date:"2020/12/18",user:"Ania"},
{date:"2020/12/12",user:"Basia"},
{date:"2020/12/19",user:"Basia"},
{date:"2020/12/21",user:"Ania"},
{date:"2020/12/24",user:"Ania"},
{date:"2020/12/27",user:"Basia"},
{date:"2020/12/29",user:"Krzysio"},
{date:"2020/12/31",user:"Krzysio"},
{date:"2021/1/2",user:"Basia"},
{date:"2020/12/29",user:"Basia"},
{date:"2021/1/3",user:"Ania"},
{date:"2021/1/5",user:"Krzysio"},
{date:"2021/1/7",user:"Ania"},
{date:"2021/1/8",user:"Majkel"},
{date:"2021/1/9",user:"Basia"},
{date:"2021/1/9",user:"Ania"},
{date:"2021/1/13",user:"Krzysio"},
{date:"2021/1/13",user:"Basia"},
{date:"2021/1/17",user:"Krzysio"},
{date:"2021/1/20",user:"Ania"},
{date:"2021/1/21",user:"Ania"},
{date:"2021/1/24",user:"Ania"},
{date:"2021/1/24",user:"Majkel"},
{date:"2021/1/18",user:"Basia"},
{date:"2021/1/29",user:"Basia"},
{date:"2021/2/2",user:"Basia"},
{date:"2021/2/6",user:"Basia"},
{date:"2021/2/10",user:"Krzysio"},
{date:"2021/2/14",user:"Krzysio"},
{date:"2021/2/14",user:"Majkel"},
{date:"2021/2/15",user:"Majkel"},
{date:"2021/2/13",user:"Basia"},
{date:"2021/2/18",user:"Krzysio"},
{date:"2021/2/17",user:"Basia"},
{date:"2021/2/20",user:"Krzysio"},
{date:"2021/2/23",user:"Krzysio"},
{date:"2021/2/17",user:"Majkel"},
{date:"2021/2/23",user:"Basia"},
{date:"2021/2/28",user:"Majkel"},
{date:"2021/3/1",user:"Ania"},
{date:"2021/3/3",user:"Majkel"},
{date:"2021/3/6",user:"Ania"},
{date:"2021/3/9",user:"Ania"},
{date:"2021/3/12",user:"Krzysio"},
{date:"2021/3/13",user:"Majkel"},
{date:"2021/3/14",user:"Ania"},
{date:"2021/3/14",user:"Basia"},
{date:"2021/3/20",user:"Krzysio"},
{date:"2021/3/21",user:"Krzysio"},
{date:"2021/3/17",user:"Majkel"},
{date:"2021/3/26",user:"Ania"},
{date:"2021/3/28",user:"Krzysio"},
{date:"2021/3/22",user:"Basia"},
{date:"2021/4/3",user:"Krzysio"},
{date:"2021/4/5",user:"Ania"},
{date:"2021/4/8",user:"Ania"},
{date:"2021/4/9",user:"Basia"},
{date:"2021/4/10",user:"Krzysio"},
{date:"2021/4/3",user:"Majkel"},
{date:"2021/4/7",user:"Majkel"},
{date:"2021/4/11",user:"Basia"},
{date:"2021/4/14",user:"Ania"},
{date:"2021/4/17",user:"Krzysio"},
{date:"2021/4/14",user:"Basia"},
{date:"2021/4/21",user:"Ania"},
{date:"2021/4/22",user:"Ania"},
{date:"2021/4/25",user:"Ania"},
{date:"2021/4/25",user:"Majkel"},
{date:"2021/5/9",user:"Ania"},
{date:"2021/5/7",user:"Basia"},
{date:"2021/5/16",user:"Krzysio"},
{date:"2021/5/5",user:"Majkel"},
{date:"2021/5/18",user:"Ania"},
{date:"2021/6/3",user:"Ania"},
{date:"2021/5/20",user:"Majkel"},
{date:"2021/5/25",user:"Basia"},
{date:"2021/5/31",user:"Basia"},
{date:"2021/5/21",user:"Basia"},
{date:"2021/5/26",user:"Majkel"},
{date:"2021/6/9",user:"Ania"},
{date:"2021/6/9",user:"Basia"},
{date:"2021/6/12",user:"Ania"},
{date:"2021/6/14",user:"Basia"},
{date:"2021/6/22",user:"Majkel"},
{date:"2021/7/2",user:"Ania"},
{date:"2021/7/5",user:"Krzysio"},
{date:"2021/7/6",user:"Ania"},
{date:"2021/7/12",user:"Krzysio"},
{date:"2021/7/5",user:"Majkel"},
{date:"2021/7/15",user:"Majkel"},
{date:"2021/7/19",user:"Krzysio"},
{}
]
