document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("exportTableCSV").addEventListener("click", function(e) {
        e.preventDefault()

            var _tbl_rows = document.querySelectorAll('#list tr')
            var csv ="";
            var rows = []
                _tbl_rows.forEach(el => {
                    var row = []
                        el.querySelectorAll('th, td').forEach(ele => {
                            var ele_clone = ele.cloneNode(true)
                            ele_clone.innerText = (ele_clone.innerText).replace(/\"/gi, '\"\"')
                            ele_clone.innerText = ('"' + ele_clone.innerText + '"')
                            row.push(ele_clone.innerText)
                        })
                    rows.push(row.join(","));
                })

                csv += rows.join(`\r\n`)
                var file = new Blob([csv], {type:'text/csv'});
                var dl_anchor = document.createElement('a')
                dl_anchor.style.display = this.nonce;
                dl_anchor.download = "pick&pack_report_cement.csv";
                dl_anchor.href = window.URL.createObjectURL(file);

                document.body.appendChild(dl_anchor)
                dl_anchor.click()

    })

});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("exportTableCSV1").addEventListener("click", function(e) {
        e.preventDefault()

            var _tbl_rows = document.querySelectorAll('#list tr')
            var csv ="";
            var rows = []
                _tbl_rows.forEach(el => {
                    var row = []
                        el.querySelectorAll('th, td').forEach(ele => {
                            var ele_clone = ele.cloneNode(true)
                            ele_clone.innerText = (ele_clone.innerText).replace(/\"/gi, '\"\"')
                            ele_clone.innerText = ('"' + ele_clone.innerText + '"')
                            row.push(ele_clone.innerText)
                        })
                    rows.push(row.join(","));
                })

                csv += rows.join(`\r\n`)
                var file = new Blob([csv], {type:'text/csv'});
                var dl_anchor = document.createElement('a')
                dl_anchor.style.display = this.nonce;
                dl_anchor.download = "pick&pack_report_coarse_item.csv";
                dl_anchor.href = window.URL.createObjectURL(file);

                document.body.appendChild(dl_anchor)
                dl_anchor.click()

    })

});
    