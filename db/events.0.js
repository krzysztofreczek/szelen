'use strict';

var events_0 = [
{date:"2020/04/27",user:"Krzysio"},
{date:"2020/04/29",user:"Krzysio"},
{date:"2020/04/27",user:"Ania"},
{date:"2020/04/27",user:"Majkel"},
{date:"2020/04/27",user:"Basia"},
{date:"2020/04/28",user:"Majkel"},
{date:"2020/04/28",user:"Basia"},
{date:"2020/04/30",user:"Ania"},
{date:"2020/04/28",user:"Ania"},
{date:"2020/04/29",user:"Ania"},
{date:"2020/04/30",user:"Krzysio"},
{date:"2020/04/30",user:"Basia"},
{date:"2020/04/30",user:"Majkel"},
{date:"2020/04/30",user:"Majkel"},
{date:"2020/05/01",user:"Majkel"},
{date:"2020/06/16",user:"Ania"},
{date:"2020/06/16",user:"Basia"},
{date:"2020/06/30",user:"Krzysio"},
{date:"2020/07/04",user:"Basia"},
{date:"2020/07/08",user:"Basia"},
{date:"2020/07/10",user:"Krzysio"},
{date:"2020/07/11",user:"Krzysio"},
{date:"2020/07/11",user:"Basia"},
{date:"2020/07/07",user:"Majkel"},
{date:"2020/07/12",user:"Basia"},
{date:"2020/07/13",user:"Ania"},
{date:"2020/07/16",user:"Majkel"},
{date:"2020/07/20",user:"Ania"},
{date:"2020/07/22",user:"Majkel"},
{date:"2020/07/30",user:"Majkel"},
{date:"2020/08/04",user:"Ania"},
{date:"2020/08/08",user:"Majkel"},
{date:"2020/05/01",user:"Basia"},
{date:"2020/05/02",user:"Krzysio"},
{date:"2020/05/02",user:"Ania"},
{date:"2020/05/03",user:"Basia"},
{date:"2020/05/03",user:"Majkel"},
{date:"2020/05/04",user:"Ania"},
{date:"2020/05/04",user:"Krzysio"},
{date:"2020/05/04",user:"Basia"},
{date:"2020/05/05",user:"Ania"},
{date:"2020/05/05",user:"Krzysio"},
{date:"2020/05/05",user:"Basia"},
{date:"2020/05/07",user:"Ania"},
{date:"2020/05/07",user:"Basia"},
{date:"2020/05/04",user:"Majkel"},
{date:"2020/05/05",user:"Majkel"},
{date:"2020/05/07",user:"Majkel"},
{date:"2020/06/17",user:"Krzysio"},
{date:"2020/06/17",user:"Basia"},
{date:"2020/06/18",user:"Krzysio"},
{date:"2020/06/19",user:"Basia"},
{date:"2020/06/21",user:"Krzysio"},
{date:"2020/06/19",user:"Majkel"},
{date:"2020/06/21",user:"Majkel"},
{date:"2020/06/23",user:"Krzysio"},
{date:"2020/06/24",user:"Krzysio"},
{date:"2020/06/24",user:"Basia"},
{date:"2020/06/25",user:"Basia"},
{date:"2020/06/24",user:"Majkel"},
{date:"2020/06/26",user:"Ania"},
{date:"2020/06/27",user:"Basia"},
{date:"2020/06/28",user:"Ania"},
{date:"2020/06/29",user:"Ania"},
{date:"2020/06/30",user:"Ania"},
{date:"2020/06/30",user:"Krzysio"},
{date:"2020/06/30",user:"Krzysio"},
{date:"2020/06/30",user:"Krzysio"},
{date:"2020/06/30",user:"Krzysio"},
{date:"2020/06/30",user:"Basia"},
{date:"2020/07/01",user:"Ania"},
{date:"2020/07/01",user:"Basia"},
{date:"2020/07/02",user:"Krzysio"},
{date:"2020/07/03",user:"Ania"},
{date:"2020/07/05",user:"Ania"},
{date:"2020/07/05",user:"Basia"},
{date:"2020/07/07",user:"Ania"},
{date:"2020/07/09",user:"Ania"},
{date:"2020/07/08",user:"Majkel"},
{date:"2020/07/12",user:"Majkel"},
{date:"2020/07/14",user:"Ania"},
{date:"2020/07/15",user:"Krzysio"},
{date:"2020/07/14",user:"Basia"},
{date:"2020/07/16",user:"Ania"},
{date:"2020/07/17",user:"Ania"},
{date:"2020/07/18",user:"Ania"},
{date:"2020/07/18",user:"Majkel"},
{date:"2020/07/19",user:"Majkel"},
{date:"2020/07/21",user:"Krzysio"},
{date:"2020/07/20",user:"Basia"},
{date:"2020/07/23",user:"Basia"},
{date:"2020/07/25",user:"Majkel"},
{date:"2020/07/26",user:"Ania"},
{date:"2020/07/26",user:"Basia"},
{date:"2020/07/27",user:"Ania"},
{date:"2020/07/28",user:"Majkel"},
{date:"2020/07/29",user:"Krzysio"},
{date:"2020/07/30",user:"Ania"},
{date:"2020/07/30",user:"Basia"},
{date:"2020/07/31",user:"Ania"},
{date:"2020/08/01",user:"Krzysio"},
{date:"2020/08/02",user:"Majkel"},
{date:"2020/08/04",user:"Krzysio"},
{date:"2020/08/03",user:"Majkel"},
{date:"2020/08/07",user:"Ania"},
{date:"2020/08/08",user:"Krzysio"},
{date:"2020/08/08",user:"Basia"},
{date:"2020/05/08",user:"Ania"},
{date:"2020/05/08",user:"Krzysio"},
{date:"2020/05/09",user:"Ania"},
{date:"2020/05/09",user:"Krzysio"},
{date:"2020/05/10",user:"Basia"},
{date:"2020/05/10",user:"Majkel"},
{date:"2020/05/11",user:"Krzysio"},
{date:"2020/05/11",user:"Ania"},
{date:"2020/05/12",user:"Ania"},
{date:"2020/05/12",user:"Krzysio"},
{date:"2020/05/12",user:"Basia"},
{date:"2020/05/13",user:"Basia"},
{date:"2020/05/14",user:"Ania"},
{date:"2020/05/14",user:"Krzysio"},
{date:"2020/05/15",user:"Ania"},
{date:"2020/05/15",user:"Basia"},
{date:"2020/05/12",user:"Majkel"},
{date:"2020/05/13",user:"Majkel"},
{date:"2020/05/15",user:"Majkel"},
{date:"2020/05/16",user:"Ania"},
{date:"2020/05/16",user:"Krzysio"},
{date:"2020/05/16",user:"Majkel"},
{date:"2020/05/16",user:"Basia"},
{date:"2020/05/17",user:"Basia"},
{date:"2020/05/17",user:"Majkel"},
{date:"2020/05/18",user:"Ania"},
{date:"2020/05/19",user:"Ania"},
{date:"2020/05/19",user:"Krzysio"},
{date:"2020/05/19",user:"Basia"},
{date:"2020/05/20",user:"Basia"},
{date:"2020/05/19",user:"Majkel"},
{date:"2020/05/20",user:"Majkel"},
{date:"2020/05/20",user:"Krzysio"},
{date:"2020/05/21",user:"Krzysio"},
{date:"2020/05/21",user:"Ania"},
{date:"2020/05/22",user:"Krzysio"},
{date:"2020/05/22",user:"Ania"},
{date:"2020/05/22",user:"Basia"},
{date:"2020/05/24",user:"Majkel"},
{date:"2020/05/22",user:"Majkel"},
{date:"2020/05/24",user:"Basia"},
{date:"2020/06/16",user:"Majkel"},
{date:"2020/06/30",user:"Krzysio"},
{date:"2020/07/05",user:"Krzysio"},
{date:"2020/07/08",user:"Krzysio"},
{date:"2020/07/09",user:"Krzysio"},
{date:"2020/07/11",user:"Ania"},
{date:"2020/07/11",user:"Majkel"},
{date:"2020/05/25",user:"Ania"},
{date:"2020/05/25",user:"Basia"},
{date:"2020/05/26",user:"Ania"},
{date:"2020/05/26",user:"Basia"},
{date:"2020/05/27",user:"Ania"},
{date:"2020/05/27",user:"Krzysio"},
{date:"2020/05/28",user:"Krzysio"},
{date:"2020/05/28",user:"Ania"},
{date:"2020/05/28",user:"Majkel"},
{date:"2020/05/25",user:"Majkel"},
{date:"2020/05/26",user:"Majkel"},
{date:"2020/05/29",user:"Majkel"},
{date:"2020/05/29",user:"Krzysio"},
{date:"2020/05/30",user:"Krzysio"},
{date:"2020/05/30",user:"Basia"},
{date:"2020/05/28",user:"Basia"},
{date:"2020/06/01",user:"Ania"},
{date:"2020/06/01",user:"Krzysio"},
{date:"2020/06/01",user:"Basia"},
{date:"2020/06/02",user:"Basia"},
{date:"2020/06/03",user:"Krzysio"},
{date:"2020/06/04",user:"Ania"},
{date:"2020/06/05",user:"Ania"},
{date:"2020/06/05",user:"Basia"},
{date:"2020/06/06",user:"Krzysio"},
{date:"2020/06/04",user:"Basia"},
{date:"2020/06/07",user:"Krzysio"},
{date:"2020/06/07",user:"Ania"},
{date:"2020/06/04",user:"Majkel"},
{date:"2020/06/07",user:"Majkel"},
{date:"2020/06/07",user:"Basia"},
{date:"2020/06/01",user:"Majkel"},
{date:"2020/06/02",user:"Majkel"},
{date:"2020/06/08",user:"Krzysio"},
{date:"2020/06/08",user:"Ania"},
{date:"2020/06/09",user:"Ania"},
{date:"2020/06/09",user:"Krzysio"},
{date:"2020/06/09",user:"Basia"},
{date:"2020/06/10",user:"Basia"},
{date:"2020/06/11",user:"Krzysio"},
{date:"2020/06/11",user:"Ania"},
{date:"2020/06/12",user:"Krzysio"},
{date:"2020/06/12",user:"Ania"},
{date:"2020/06/09",user:"Majkel"},
{date:"2020/06/10",user:"Majkel"},
{date:"2020/06/14",user:"Basia"},
{date:"2020/06/12",user:"Basia"},
{date:"2020/06/14",user:"Majkel"},
{date:"2020/06/15",user:"Ania"},
{date:"2020/06/12",user:"Majkel"},
{date:"2020/06/17",user:"Krzysio"},
{date:"2020/06/17",user:"Ania"},
{date:"2020/06/18",user:"Ania"},
{date:"2020/06/18",user:"Basia"},
{date:"2020/06/20",user:"Krzysio"},
{date:"2020/06/17",user:"Majkel"},
{date:"2020/06/21",user:"Basia"},
{date:"2020/06/22",user:"Ania"},
{date:"2020/06/23",user:"Basia"},
{date:"2020/06/23",user:"Majkel"},
{date:"2020/06/25",user:"Ania"},
{date:"2020/06/25",user:"Majkel"},
{date:"2020/06/26",user:"Krzysio"},
{date:"2020/06/27",user:"Majkel"},
{date:"2020/06/28",user:"Krzysio"},
{date:"2020/06/30",user:"Krzysio"},
{date:"2020/06/30",user:"Krzysio"},
{date:"2020/06/30",user:"Krzysio"},
{date:"2020/06/30",user:"Krzysio"},
{date:"2020/06/30",user:"Krzysio"},
{date:"2020/06/30",user:"Krzysio"},
{date:"2020/06/30",user:"Majkel"},
{date:"2020/07/01",user:"Krzysio"},
{date:"2020/07/01",user:"Krzysio"},
{date:"2020/07/01",user:"Majkel"},
{date:"2020/07/03",user:"Ania"},
{date:"2020/07/04",user:"Majkel"},
{date:"2020/07/05",user:"Majkel"},
{date:"2020/07/06",user:"Ania"},
{date:"2020/07/07",user:"Basia"},
{date:"2020/07/13",user:"Ania"},
{date:"2020/07/15",user:"Basia"},
{date:"2020/07/16",user:"Krzysio"},
{date:"2020/07/17",user:"Krzysio"},
{date:"2020/07/18",user:"Krzysio"},
{date:"2020/07/18",user:"Basia"},
{date:"2020/07/14",user:"Majkel"},
{date:"2020/07/19",user:"Basia"},
{date:"2020/07/20",user:"Krzysio"},
{date:"2020/07/21",user:"Ania"},
{date:"2020/07/21",user:"Basia"},
{date:"2020/07/22",user:"Ania"},
{date:"2020/07/21",user:"Majkel"},
{date:"2020/07/25",user:"Basia"},
{date:"2020/07/25",user:"Krzysio"},
{date:"2020/07/26",user:"Krzysio"},
{date:"2020/07/26",user:"Majkel"},
{date:"2020/07/28",user:"Basia"},
{date:"2020/07/28",user:"Krzysio"},
{date:"2020/07/29",user:"Ania"},
{date:"2020/07/29",user:"Basia"},
{date:"2020/07/30",user:"Krzysio"},
{date:"2020/08/01",user:"Basia"},
{date:"2020/08/01",user:"Majkel"},
{date:"2020/08/02",user:"Ania"},
{date:"2020/08/03",user:"Basia"},
{date:"2020/08/05",user:"Basia"},
{date:"2020/08/05",user:"Ania"},
{date:"2020/08/06",user:"Krzysio"},
{date:"2020/08/04",user:"Majkel"},
{date:"2020/08/06",user:"Basia"},
{date:"2020/08/08",user:"Krzysio"},
{date:"2020/8/10",user:"Ania"},
{date:"2020/8/10",user:"Krzysio"},
{date:"2020/8/13",user:"Basia"},
{date:"2020/8/13",user:"Majkel"},
{date:"2020/8/16",user:"Basia"},
{date:"2020/8/17",user:"Ania"},
{date:"2020/8/18",user:"Majkel"},
{date:"2020/8/19",user:"Basia"},
{date:"2020/8/20",user:"Ania"},
{date:"2020/8/21",user:"Krzysio"},
{date:"2020/8/21",user:"Krzysio"},
{date:"2020/8/21",user:"Ania"},
{date:"2020/8/21",user:"Krzysio"},
{date:"2020/8/21",user:"Krzysio"},
{date:"2020/8/22",user:"Krzysio"},
{date:"2020/8/22",user:"Ania"},
{date:"2020/8/23",user:"Majkel"},
{date:"2020/8/23",user:"Ania"},
{date:"2020/8/24",user:"Ania"},
{date:"2020/8/25",user:"Basia"},
{date:"2020/8/26",user:"Krzysio"},
{date:"2020/8/27",user:"Krzysio"},
{date:"2020/8/27",user:"Basia"},
{date:"2020/9/1",user:"Majkel"},
{date:"2020/9/7",user:"Basia"},
{date:"2020/9/17",user:"Ania"},
{date:"2020/9/14",user:"Basia"},
{date:"2020/9/20",user:"Ania"},
{date:"2020/9/16",user:"Basia"},
{date:"2020/9/20",user:"Majkel"},
{date:"2020/9/23",user:"Basia"},
{date:"2020/9/22",user:"Majkel"},
{date:"2020/9/21",user:"Basia"},
{date:"2020/9/24",user:"Basia"},
{date:"2020/9/26",user:"Basia"},
{date:"2020/9/28",user:"Basia"},
{date:"2020/10/4",user:"Krzysio"},
{date:"2020/10/11",user:"Majkel"},
{date:"2020/10/5",user:"Basia"},
{date:"2020/10/15",user:"Krzysio"},
{date:"2020/10/16",user:"Ania"},
{date:"2020/10/12",user:"Basia"},
{date:"2020/10/17",user:"Majkel"},
{date:"2020/10/19",user:"Ania"},
{date:"2020/10/22",user:"Krzysio"},
{date:"2020/10/25",user:"Krzysio"},
{date:"2020/10/20",user:"Basia"},
{date:"2020/10/27",user:"Ania"},
{date:"2020/10/30",user:"Krzysio"},
{date:"2020/11/3",user:"Ania"},
{date:"2020/10/27",user:"Majkel"},
{date:"2020/11/3",user:"Majkel"},
{date:"2020/11/8",user:"Ania"},
{date:"2020/11/4",user:"Basia"},
{date:"2020/11/9",user:"Krzysio"},
{date:"2020/11/11",user:"Ania"},
{date:"2020/11/12",user:"Ania"},
{date:"2020/11/15",user:"Ania"},
{date:"2020/11/16",user:"Ania"},
{date:"2020/11/19",user:"Krzysio"},
{date:"2020/11/21",user:"Krzysio"},
{date:"2020/11/18",user:"Majkel"},
{date:"2020/11/22",user:"Basia"},
{date:"2020/11/22",user:"Basia"},
{date:"2020/11/25",user:"Ania"},
{date:"2020/11/24",user:"Majkel"},
{date:"2020/11/29",user:"Krzysio"},
{date:"2020/11/24",user:"Basia"},
{date:"2020/11/28",user:"Majkel"},
{date:"2020/12/3",user:"Krzysio"},
{}
]
