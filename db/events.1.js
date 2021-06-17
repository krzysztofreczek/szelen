'use strict';

var events_1 = [
{date:"2020/04/27",user:"Krzysio"},
{date:"2020/08/09",user:"Ania"},
{date:"2020/8/10",user:"Basia"},
{date:"2020/8/11",user:"Basia"},
{date:"2020/8/11",user:"Majkel"},
{date:"2020/8/11",user:"Ania"},
{date:"2020/8/11",user:"Krzysio"},
{date:"2020/8/21",user:"Ania"},
{date:"2020/8/22",user:"Majkel"},
{date:"2020/8/24",user:"Basia"},
{date:"2020/8/30",user:"Basia"},
{date:"2020/8/25",user:"Majkel"},
{date:"2020/8/31",user:"Ania"},
{date:"2020/9/1",user:"Basia"},
{date:"2020/9/1",user:"Krzysio"},
{date:"2020/9/4",user:"Ania"},
{date:"2020/9/4",user:"Basia"},
{date:"2020/9/3",user:"Majkel"},
{date:"2020/9/4",user:"Krzysio"},
{date:"2020/9/7",user:"Ania"},
{date:"2020/9/8",user:"Ania"},
{date:"2020/9/9",user:"Krzysio"},
{date:"2020/9/11",user:"Krzysio"},
{date:"2020/9/8",user:"Majkel"},
{date:"2020/9/12",user:"Majkel"},
{date:"2020/9/12",user:"Krzysio"},
{date:"2020/9/13",user:"Majkel"},
{date:"2020/9/13",user:"Ania"},
{date:"2020/9/13",user:"Krzysio"},
{date:"2020/9/17",user:"Krzysio"},
{date:"2020/9/20",user:"Basia"},
{date:"2020/9/18",user:"Majkel"},
{date:"2020/9/21",user:"Ania"},
{date:"2020/9/23",user:"Ania"},
{date:"2020/9/23",user:"Basia"},
{date:"2020/9/23",user:"Majkel"},
{date:"2020/9/29",user:"Ania"},
{date:"2020/9/30",user:"Ania"},
{date:"2020/10/4",user:"Basia"},
{date:"2020/10/5",user:"Ania"},
{date:"2020/10/1",user:"Majkel"},
{date:"2020/10/9",user:"Krzysio"},
{date:"2020/10/10",user:"Ania"},
{date:"2020/10/9",user:"Basia"},
{date:"2020/10/18",user:"Majkel"},
{date:"2020/10/27",user:"Basia"},
{date:"2020/10/28",user:"Majkel"},
{date:"2020/11/3",user:"Basia"},
{date:"2020/11/11",user:"Ania"},
{date:"2020/11/14",user:"Ania"},
{date:"2020/11/10",user:"Basia"},
{date:"2020/11/17",user:"Basia"},
{date:"2020/11/25",user:"Basia"},
{date:"2020/11/29",user:"Majkel"},
{date:"2020/11/30",user:"Basia"},
{date:"2020/12/11",user:"Krzysio"},
{date:"2020/12/12",user:"Majkel"},
{date:"2020/12/11",user:"Basia"},
{date:"2020/12/15",user:"Basia"},
{date:"2020/12/25",user:"Majkel"},
{date:"2020/12/28",user:"Majkel"},
{date:"2020/12/28",user:"Basia"},
{date:"2021/1/11",user:"Ania"},
{date:"2021/1/11",user:"Basia"},
{date:"2021/1/17",user:"Ania"},
{date:"2021/1/21",user:"Krzysio"},
{date:"2021/1/21",user:"Majkel"},
{date:"2021/1/11",user:"Basia"},
{date:"2021/1/27",user:"Krzysio"},
{date:"2021/1/29",user:"Ania"},
{date:"2021/1/31",user:"Ania"},
{date:"2021/1/25",user:"Basia"},
{date:"2021/2/1",user:"Basia"},
{date:"2021/2/4",user:"Krzysio"},
{date:"2021/2/2",user:"Basia"},
{date:"2021/1/30",user:"Majkel"},
{date:"2021/2/1",user:"Majkel"},
{date:"2021/2/4",user:"Majkel"},
{date:"2021/2/7",user:"Ania"},
{date:"2021/2/6",user:"Ania"},
{date:"2021/2/10",user:"Krzysio"},
{date:"2021/2/15",user:"Basia"},
{date:"2021/3/3",user:"Basia"},
{date:"2021/3/8",user:"Basia"},
{date:"2021/3/21",user:"Basia"},
{date:"2021/3/20",user:"Majkel"},
{date:"2021/3/25",user:"Krzysio"},
{date:"2021/3/25",user:"Basia"},
{date:"2021/3/28",user:"Majkel"},
{date:"2021/3/31",user:"Krzysio"},
{date:"2021/4/3",user:"Ania"},
{date:"2021/4/2",user:"Basia"},
{date:"2021/4/9",user:"Majkel"},
{date:"2021/3/29",user:"Majkel"},
{date:"2021/4/16",user:"Majkel"},
{date:"2021/4/20",user:"Basia"},
{date:"2021/4/27",user:"Krzysio"},
{date:"2021/4/29",user:"Ania"},
{date:"2021/5/1",user:"Krzysio"},
{date:"2021/4/21",user:"Majkel"},
{date:"2021/4/27",user:"Majkel"},
{date:"2021/5/2",user:"Ania"},
{date:"2021/5/6",user:"Ania"},
{date:"2021/5/8",user:"Krzysio"},
{date:"2021/5/11",user:"Ania"},
{date:"2021/5/13",user:"Ania"},
{date:"2021/5/12",user:"Basia"},
{date:"2021/5/5",user:"Basia"},
{date:"2021/5/8",user:"Majkel"},
{date:"2021/5/16",user:"Majkel"},
{date:"2021/5/19",user:"Ania"},
{date:"2021/5/20",user:"Krzysio"},
{date:"2021/5/23",user:"Ania"},
{date:"2021/5/25",user:"Krzysio"},
{date:"2021/6/1",user:"Krzysio"},
{date:"2021/6/2",user:"Ania"},
{date:"2021/5/31",user:"Majkel"},
{date:"2021/6/5",user:"Ania"},
{date:"2021/5/17",user:"Basia"},
{date:"2021/6/3",user:"Basia"},
{date:"2021/6/7",user:"Majkel"},
{date:"2021/6/8",user:"Krzysio"},
{date:"2021/6/10",user:"Krzysio"},
{date:"2021/6/10",user:"Ania"},
{date:"2021/6/13",user:"Krzysio"},
{date:"2021/6/15",user:"Ania"},
{date:"2021/6/14",user:"Ania"},
{date:"2021/6/17",user:"Krzysio"},
{}
]
