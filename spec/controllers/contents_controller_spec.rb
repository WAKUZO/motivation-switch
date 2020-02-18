require 'rails_helper'

describe Contentscontroller, type: :controller do

  describe 'GET #index' do
    it "renders the :index template" do
      get :index
      expect(response).to render_template :new
    end
  end
end