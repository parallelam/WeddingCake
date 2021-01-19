class User < ApplicationRecord
    belongs_to :state, optional: true
    belongs_to :medic, optional: true
end
