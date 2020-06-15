var formError = {
	init: function () {
		this.setParameters();
		this.errorMessage();
		this.bindEvents();
	},
	setParameters: function () {
		this.$text = $('.jsc-contact-name');
		this.$email = $('.jsc-contact-email');
		this.$message = $('.jsc-contact-message');
	},
	bindEvents: function () {
		var myself = this;
		$('.jsc-form-submit').on('click', function (event) {
			event.preventDefault();
			myself.formCheck();
		})
	},
	errorMessage: function () {
		this.name = 'お名前を入力してください';
		this.mail1 = 'メールアドレスを入力してください';
		this.mail2 = '正しいメールアドレスを入力してください';
		this.message = 'メッセージ本文を入力してください';
	},
	formCheck: function () {
		var error = false;
		if (this.$text.val() == '') {
			error = true;
			if (!this.$text.next('p.contact-error').length) {
				this.$text.after('<p class="contact-error">'+this.name+'</p>');
			}
		} else {
			this.$text.next('p.contact-error').remove();
		}

		if (this.$email.val() == '') {
			error = true;
			if (!this.$email.next('p.contact-error').length) {
				this.$email.after('<p class="contact-error">'+this.mail1+'</p>');
			}
		} else {
			this.$email.next('p.contact-error').remove();
		}
		if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/.test(this.$email.val())) {
			error = true;
			if (!this.$email.next('p.contact-error').length) {
				this.$email.after('<p class="contact-error">'+this.mail2+'</p>');
			}
		} else {
			this.$email.next('p.contact-error').remove();
		}

		if (this.$message.val() == '') {
			error = true;
			if (!this.$message.next('p.contact-error').length) {
				this.$message.after('<p class="contact-error">'+this.message+'</p>');
			}
		} else {
			this.$message.next('p.contact-error').remove();
		}
		if (error == false) {
			let form = $('.jsc-contact-form');
			form.submit();
		}
	}
}
