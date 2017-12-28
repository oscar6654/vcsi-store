# This migration comes from solidus_paypal_express (originally 20130809014319)
class AddRefundedFieldsToSpreePaypalExpressCheckouts < ActiveRecord::Migration[4.2]
  def change
    add_column :spree_paypal_express_checkouts, :refund_transaction_id, :string
    add_column :spree_paypal_express_checkouts, :refunded_at, :datetime
    add_column :spree_paypal_express_checkouts, :refund_type, :string
    add_column :spree_paypal_express_checkouts, :created_at, :datetime
  end
end
