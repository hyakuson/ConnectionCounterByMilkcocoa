(function () {
    window.connection_counter = {

        start: function (tagId) {

            var milkcocoa = new MilkCocoa("{your-app-id}.mlkcca.com");
            var ds = milkcocoa.dataStore("connection_count");

            var count = 0;

            ds.get("connection_count", function (err, datum) {
                if (err) {
                    // 初回使用時は1で初期化
                    if (err === "not found") {
                        ds.set("connection_count", {
                            "count": "1"
                        });
                        return;
                    } else {
                        console.log(err);
                        return;
                    }
                }

                // 接続数を取得し+1
                count = parseInt(datum.value.count, 10) + 1;

                ds.set("connection_count", {
                    "count": count
                });
            });
            
            console.log(ds.count);

            ds.on('set', function (set) {
                count = parseInt(set.value.count, 10);
                document.getElementById(tagId).textContent = count;
            });

            // ページ離脱の前にカウントを減らす
            window.addEventListener('beforeunload', function (e) {
                count--;
                ds.set("connection_count", {
                    "count": count
                });
            });
        }
    }
}());