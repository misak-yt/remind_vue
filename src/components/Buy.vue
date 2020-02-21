/* eslint-disable */
<template>
  <div>
		<h2>買うリスト</h2>
		<hr>
		<div class="row">
			<div class="col-md-4 order-md-2">
				<h4 class="justify-content-between align-items-center mb-3"><span>登録済みリスト</span></h4>
				<ul class="list-group mb-3">
					<li class="list-group-item d-flex justify-content-between lh-condensed" v-for="(selfBuys, key) in getSelfBuys"> <!-- eslint-disable-line -->
						<h6> {{ selfBuys.title }} </h6>
						<div class="col-md-6">
							<div class="text-muted"> {{ selfBuys.categoly }} </div>
							<div class="text-muted">{{ selfBuys.deadline }}まで</div>
						</div>
						<div class="col-md-2"><button @click="del(key)">削除</button></div>
          </li>
				</ul>
			</div>
			<div class="col-md-8 order-md-1">
				<h4>登録</h4>
				<form @submit.prevent="onclick">
					<div class="row">
						<div class="mb-3 col-md-6">
							<label for="thing">もの</label>
							<input type="text" class="form-control" v-model="title" required>
							<div class="invalid-feedback">
								買うものを入力してください
							</div>
						</div>
						<div class="mb-3 col-md-6">
							<label for="date" class="control-label">いつまで？</label>
							<input type="date" class="form-control" v-model="deadline" required/>
							<div class="invalid-feedback">
								締め切りを入力してください
							</div>
						</div>
					</div>
					<div class="row">
						<div class="mb-3 col-md-6">
							<label for="categories">種類</label>
							<select class="custom-select d-block w-100" v-model="categoly" required>
								<option>選択...</option>
								<option>日用品</option>
								<option>食品</option>
								<option>緊急</option>
								<option>大学</option>
								<option>その他</option>
							</select>
							<div class="invalid-feedback">
								種類を選択してください
							</div>
						</div>
						<div class="mb-3 col-md-6">
							<label for="categories">区分</label>
							<select class="custom-select d-block w-100" v-model="categolize" required>
								<option>選択...</option>
								<option>プライベート</option>
								<option>就活</option>
								<option>大学</option>
								<option>その他</option>
							</select>
							<div class="invalid-feedback">
								区分を選択してください
							</div>
						</div>
					</div>
					<div class="md-3">
						<label for="detail" class="control-label">詳細:</label>
						<textarea name="detail" id class="form-control" cols="5" rows="3" v-model="detail"/>
					</div>
					<a href="#" @click="regist">
						<button class="btn btn-default">登録</button>
					</a>
			</form>
			</div>
		</div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  data () {
    return {
      selfs: [],
      title: null,
			categoly: null,
			categolize: null,
      deadline: null,
			detail: null,
    }
  },
  methods: {
    regist: function () {
      var self = this
      let data = {
        title: this.title,
				categoly: this.categoly,
				categolize: this.categolize,
        deadline: this.deadline,
        date: this.getToday(),
        detail: this.detail
      }

      // 登録したら空欄にする
      firebase
        .database()
        .ref('buy')
        .push(data)
        .then(function () {
          console.log('success!!')
          alert('登録完了！')
          self.title = null
					self.categoly = null
					self.categolize = null
          self.deadline = null
          self.date = null
          self.detail = null
        })

      console.log(data)
		},
		del (key) {
			firebase.database().ref('buy').remove()
		},
		getSelf () {
			firebase.database().ref('buy/').on('value', snapshot => {
				console.log(snapshot.val())
			})
		},
    getToday: function () {
      var today = new Date()
      return (
        today.getFullYear() +
        '-' +
        ('00' + (today.getMonth() + 1)).slice(-2) +
        '-' +
        ('00' + today.getDate()).slice(-2)
      )
    }
  },
  mounted () {
    var _this = this
    // 他は表示させない
    firebase
      .database()
      .ref('buy/')
      .on('value', function (snapshot) {
        _this.selfs = []
        let categories = snapshot.val()
        for (var i in categories) {
          categories[i].id = i
          _this.selfs.push(categories[i])
        }
      })
	},
	created () {
		this.buyRef = firebase.database().ref('buy')

		var _this = this
		this.buyRef.on('value', function (snapshot) {
			_this.selfs = snapshot.val()
		})
	},
	computed: {
		getSelfBuys () {
			return this.selfs
		}
	}
}
</script>

<style scoped>
.container {
  max-width: 960px;
}

.lh-condensed { line-height: 1.25; }
</style>
