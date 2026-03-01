```ts
Vue.component('v-two-border', {
	props: ['title'],
	computed: {
		getTitle() {
			return this.title.split(';')
		},
	},t-teo
    template:
		`<div class="v-two-wrapper v-two-vertical-top">
			<div class="v-two-column v-two-column-half v-two-border">
				<div class="v-two-title v-two-bg-accent" v-text="getTitle[0]"></div>
				<slot name="first">User Default1</slot>
			</div>
			<div class="v-two-column v-two-column-half v-two-border">
				<div class="v-two-title v-two-bg-light" v-text="getTitle[1]"></div>
				<slot name="last">User Default2</slot>
			</div>
		</div>`,
})
```

```css
.v-two-wrapper {
  display: flex;
  margin: 10px 0px;
}
.v-two-column {
  margin: 0px 5px;
}
.v-two-column-half {
  width: 50%;
}
.v-two-code-comment-block {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  min-height: calc(100% - 20px);
  margin: 10px 0;
}
.v-two-border {
  box-shadow: var(--box-shadow);
}
.v-two-title {
  padding: 10px;
  font-weight: bold;
}
.v-two-bg-accent {
  background-color: rgba(var(--color-sea-green-light), 0.5);
}
.v-two-bg-light {
  background-color: rgb(var(--color-gray-20));
}
.v-two-vertical-top {
  align-items: flex-start;
}
```
