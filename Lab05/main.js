function load () {
    let a = [5,10,8,4,6,9,8,1,10,7,6,9,3,10,4,2,6,6,4,10,10,5,5,5,9,10,2,2,7,2];
    let b = [7,6,4,6,3,8,10,9,6,8,10,8,4,5,7,6,4,7,4,1,7,3,4,9,10,9,4,4,6,10];
    let c = [77,42,53,63,59,82,48,40,60,93,57,53,79,94,98,98,48,85,95,70,41,42,57,97,66,55,67,55,95,75]
    let d = [99,70,40,51,92,85,65,40,49,53,81,73,84,100,77,47,68,84,63,72,78,91,73,94,72,77,84,84,84,77]
    sum_1=0; 
    for (i=0; i<a.length;i++){
        sum_1=sum_1+a[i];
    }
    sum_2=0
    for (i=0; i<b.length;i++){
        sum_2=sum_2+b[i];
    }
    sum_3=0 
    for (i=0; i<c.length;i++){
        sum_3=sum_3+c[i];
    }
    sum_4=0
    for (i=0; i<d.length;i++){
        sum_4=sum_4+d[i];
    }
    let sums=[sum_1, sum_2,sum_3,sum_4];
    let total_score= sums[0]+sums[1]+sums[2]+sums[3];
    const result={
        column_1:a,
        column_2:b,
        column_3:c,
        column_4:d,
        sums:sums,
        total_score:total_score
    }
    console.log (result)
}
