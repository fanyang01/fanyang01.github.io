var list = document.querySelector('#list');

list.addEventListener('dom-change', function() {
	list.toggleCollapse = function() {
		list.$.collapse.toggle();
		if(list.$.collapse.opened) {
			list.$.expand.icon = "expand-less";
		} else {
			list.$.expand.icon = "expand-more";
		}
	}
})
