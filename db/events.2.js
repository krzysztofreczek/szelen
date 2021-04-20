'use strict';

var events_2 = [
{date:"2020/04/27",user:"Krzysio"},
{date:"2020/08/08",user:"Krzysio"},
{date:"2020/08/09",user:"Majkel"},
{date:"2020/8/9",user:"Krzysio"},
{date:"2020/8/10",user:"Krzysio"},
{date:"2020/8/10",user:"Krzysio"},
{date:"2020/8/10",user:"Majkel"},
{date:"2020/8/13",user:"Krzysio"},
{date:"2020/8/13",user:"Ania"},
{date:"2020/8/14",user:"Krzysio"},
{date:"2020/8/16",user:"Majkel"},
{date:"2020/8/18",user:"Krzysio"},
{date:"2020/8/18",user:"Basia"},
{date:"2020/8/20",user:"Krzysio"},
{date:"2020/8/21",user:"Ania"},
{date:"2020/8/21",user:"Ania"},
{date:"2020/8/20",user:"Majkel"},
{date:"2020/8/22",user:"Basia"},
{date:"2020/8/23",user:"Basia"},
{date:"2020/8/23",user:"Krzysio"},
{date:"2020/8/24",user:"Krzysio"},
{date:"2020/8/24",user:"Majkel"},
{date:"2020/8/26",user:"Ania"},
{date:"2020/8/27",user:"Ania"},
{date:"2020/8/28",user:"Ania"},
{date:"2020/8/30",user:"Krzysio"},
{date:"2020/8/27",user:"Majkel"},
{date:"2020/8/31",user:"Basia"},
{date:"2020/9/5",user:"Majkel"},
{date:"2020/9/5",user:"Basia"},
{date:"2020/9/12",user:"Basia"},
{date:"2020/9/12",user:"Majkel"},
{date:"2020/9/11",user:"Majkel"},
{date:"2020/9/16",user:"Ania"},
{date:"2020/9/18",user:"Basia"},
{date:"2020/9/20",user:"Krzysio"},
{date:"2020/9/15",user:"Majkel"},
{date:"2020/9/23",user:"Ania"},
{date:"2020/9/24",user:"Majkel"},
{date:"2020/9/26",user:"Krzysio"},
{date:"2020/9/27",user:"Krzysio"},
{date:"2020/9/29",user:"Ania"},
{date:"2020/10/2",user:"Basia"},
{date:"2020/10/3",user:"Krzysio"},
{date:"2020/10/13",user:"Krzysio"},
{date:"2020/10/15",user:"Krzysio"},
{date:"2020/10/17",user:"Ania"},
{date:"2020/10/18",user:"Basia"},
{date:"2020/10/20",user:"Ania"},
{date:"2020/10/22",user:"Ania"},
{date:"2020/10/24",user:"Ania"},
{date:"2020/10/25",user:"Basia"},
{date:"2020/10/26",user:"Ania"},
{date:"2020/10/29",user:"Ania"},
{date:"2020/10/31",user:"Krzysio"},
{date:"2020/11/1",user:"Basia"},
{date:"2020/10/28",user:"Basia"},
{date:"2020/11/4",user:"Krzysio"},
{date:"2020/10/31",user:"Majkel"},
{date:"2020/11/6",user:"Krzysio"},
{date:"2020/11/8",user:"Basia"},
{date:"2020/11/11",user:"Krzysio"},
{date:"2020/11/7",user:"Majkel"},
{date:"2020/11/14",user:"Krzysio"},
{date:"2020/11/17",user:"Krzysio"},
{date:"2020/11/19",user:"Ania"},
{date:"2020/11/21",user:"Ania"},
{date:"2020/11/19",user:"Majkel"},
{date:"2020/11/22",user:"Basia"},
{date:"2020/11/22",user:"Majkel"},
{date:"2020/11/18",user:"Basia"},
{date:"2020/11/24",user:"Ania"},
{date:"2020/11/27",user:"Ania"},
{date:"2020/11/28",user:"Ania"},
{date:"2020/11/30",user:"Ania"},
{date:"2020/12/1",user:"Majkel"},
{date:"2020/12/2",user:"Ania"},
{date:"2020/12/4",user:"Ania"},
{date:"2020/12/8",user:"Krzysio"},
{date:"2020/12/5",user:"Basia"},
{date:"2020/12/8",user:"Krzysio"},
{date:"2020/12/7",user:"Ania"},
{date:"2020/12/9",user:"Majkel"},
{date:"2020/12/12",user:"Ania"},
{date:"2020/12/17",user:"Ania"},
{date:"2020/12/20",user:"Ania"},
{date:"2020/12/16",user:"Majkel"},
{date:"2020/12/22",user:"Ania"},
{date:"2020/12/24",user:"Krzysio"},
{date:"2020/12/27",user:"Krzysio"},
{date:"2020/12/21",user:"Basia"},
{date:"2020/12/26",user:"Ania"},
{date:"2020/12/26",user:"Majkel"},
{date:"2020/12/28",user:"Ania"},
{date:"2020/12/30",user:"Ania"},
{date:"2020/12/29",user:"Majkel"},
{date:"2021/1/1",user:"Krzysio"},
{date:"2021/1/3",user:"Majkel"},
{date:"2021/1/6",user:"Basia"},
{date:"2021/1/6",user:"Ania"},
{date:"2021/1/8",user:"Krzysio"},
{date:"2021/1/10",user:"Ania"},
{date:"2021/1/10",user:"Majkel"},
{date:"2021/1/12",user:"Basia"},
{date:"2021/1/16",user:"Basia"},
{date:"2021/1/15",user:"Majkel"},
{date:"2021/1/21",user:"Krzysio"},
{date:"2021/1/21",user:"Krzysio"},
{date:"2021/1/20",user:"Krzysio"},
{date:"2021/1/24",user:"Krzysio"},
{date:"2021/1/26",user:"Basia"},
{date:"2021/2/8",user:"Krzysio"},
{date:"2021/2/5",user:"Basia"},
{date:"2021/2/9",user:"Majkel"},
{date:"2021/2/9",user:"Ania"},
{date:"2021/2/8",user:"Krzysio"},
{date:"2021/2/13",user:"Krzysio"},
{date:"2021/2/15",user:"Ania"},
{date:"2021/2/11",user:"Majkel"},
{date:"2021/2/16",user:"Ania"},
{date:"2021/2/16",user:"Basia"},
{date:"2021/2/17",user:"Ania"},
{date:"2021/2/21",user:"Basia"},
{date:"2021/2/20",user:"Ania"},
{date:"2021/2/22",user:"Ania"},
{date:"2021/2/23",user:"Ania"},
{date:"2021/2/27",user:"Majkel"},
{date:"2021/2/19",user:"Majkel"},
{date:"2021/2/28",user:"Basia"},
{date:"2021/3/1",user:"Majkel"},
{date:"2021/3/2",user:"Krzysio"},
{date:"2021/3/4",user:"Ania"},
{date:"2021/3/6",user:"Basia"},
{date:"2021/3/10",user:"Krzysio"},
{date:"2021/3/1",user:"Majkel"},
{date:"2021/3/8",user:"Majkel"},
{date:"2021/3/14",user:"Krzysio"},
{date:"2021/3/15",user:"Ania"},
{date:"2021/3/10",user:"Basia"},
{date:"2021/3/17",user:"Ania"},
{date:"2021/3/19",user:"Krzysio"},
{date:"2021/3/19",user:"Basia"},
{date:"2021/3/20",user:"Basia"},
{date:"2021/3/28",user:"Ania"},
{date:"2021/3/24",user:"Basia"},
{date:"2021/4/1",user:"Majkel"},
{date:"2021/4/2",user:"Ania"},
{date:"2021/4/1",user:"Basia"},
{date:"2021/4/7",user:"Ania"},
{date:"2021/4/9",user:"Krzysio"},
{date:"2021/4/11",user:"Ania"},
{date:"2021/4/8",user:"Majkel"},
{date:"2021/4/13",user:"Krzysio"},
{date:"2021/4/14",user:"Krzysio"},
{date:"2021/4/17",user:"Basia"},
{date:"2021/4/12",user:"Basia"},
{date:"2021/4/18",user:"Ania"},
{date:"2021/4/20",user:"Krzysio"},
{}
]
